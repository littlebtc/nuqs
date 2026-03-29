import { useEffect, useMemo, useState } from 'react'
import { debug } from '../lib/debug'
import { createEmitter } from '../lib/emitter'
import { renderQueryString } from '../lib/url-encoding'
import { createAdapterProvider, type AdapterProvider } from './lib/context'
import type { AdapterInterface, AdapterOptions } from './lib/defs'
import { applyChange, filterSearchParams } from './lib/key-isolation'
import {
  historyUpdateMarker,
  patchHistory,
  type SearchParamsSyncEmitterEvents
} from './lib/patch-history'

const emitter = createEmitter<SearchParamsSyncEmitterEvents>()

// Patch history to sync wouter Link navigations and other external URL changes
// via the emitter, enabling key isolation (only components watching changed keys re-render).
patchHistory(emitter, 'wouter')

function updateUrl(search: URLSearchParams, options: AdapterOptions) {
  const url = new URL(location.href)
  url.search = renderQueryString(search)
  debug('[nuqs wouter] Updating url: %s', url)
  const method =
    options.history === 'push' ? history.pushState : history.replaceState
  method.call(history, history.state, historyUpdateMarker, url)
  emitter.emit('update', search)
  if (options.scroll === true) {
    window.scrollTo({ top: 0 })
  }
}

function useNuqsWouterAdapter(watchKeys: string[]): AdapterInterface {
  const [searchParams, setSearchParams] = useState(() =>
    filterSearchParams(new URLSearchParams(location.search), watchKeys, false)
  )
  useEffect(() => {
    const onPopState = () => {
      setSearchParams(
        applyChange(new URLSearchParams(location.search), watchKeys, false)
      )
    }
    const onEmitterUpdate = (search: URLSearchParams) => {
      setSearchParams(applyChange(search, watchKeys, true))
    }
    emitter.on('update', onEmitterUpdate)
    window.addEventListener('popstate', onPopState)
    return () => {
      emitter.off('update', onEmitterUpdate)
      window.removeEventListener('popstate', onPopState)
    }
  }, [watchKeys.join('&')])
  return useMemo(() => ({ searchParams, updateUrl }), [searchParams])
}

export const NuqsAdapter: AdapterProvider = createAdapterProvider(useNuqsWouterAdapter)

/**
 * Opt-in to syncing shallow updates of the URL with the useOptimisticSearchParams hook.
 *
 * By default, the useOptimisticSearchParams hook will only react to internal nuqs updates.
 * If third party code updates the History API directly, use this function to
 * enable useOptimisticSearchParams to react to those changes.
 */
export function enableHistorySync(): void {
  patchHistory(emitter, 'wouter')
}
