import { JSX, lazy } from 'react'

// prettier-ignore
const routes: Record<string, React.LazyExoticComponent<() => JSX.Element>> = {
  // Shared E2E tests
  '/basic-io/useQueryState':                lazy(() => import('./routes/basic-io.useQueryState')),
  '/basic-io/useQueryStates':               lazy(() => import('./routes/basic-io.useQueryStates')),
  '/conditional-rendering/useQueryState':   lazy(() => import('./routes/conditional-rendering.useQueryState')),
  '/conditional-rendering/useQueryStates':  lazy(() => import('./routes/conditional-rendering.useQueryStates')),
  '/form/useQueryState':                    lazy(() => import('./routes/form.useQueryState')),
  '/form/useQueryStates':                   lazy(() => import('./routes/form.useQueryStates')),
  '/hash-preservation':                     lazy(() => import('./routes/hash-preservation')),
  '/history-sync':                          lazy(() => import('./routes/history-sync')),
  '/json':                                  lazy(() => import('./routes/json')),
  '/life-and-death':                        lazy(() => import('./routes/life-and-death')),
  '/linking/useQueryState':                 lazy(() => import('./routes/linking.useQueryState')),
  '/linking/useQueryState/other':           lazy(() => import('./routes/linking.useQueryState.other')),
  '/linking/useQueryStates':                lazy(() => import('./routes/linking.useQueryStates')),
  '/linking/useQueryStates/other':          lazy(() => import('./routes/linking.useQueryStates.other')),
  '/native-array':                          lazy(() => import('./routes/native-array')),
  '/pretty-urls':                           lazy(() => import('./routes/pretty-urls')),
  '/referential-stability/useQueryState':   lazy(() => import('./routes/referential-stability.useQueryState')),
  '/referential-stability/useQueryStates':  lazy(() => import('./routes/referential-stability.useQueryStates')),
  '/routing/useQueryState':                 lazy(() => import('./routes/routing.useQueryState')),
  '/routing/useQueryState/other':           lazy(() => import('./routes/routing.useQueryState.other')),
  '/routing/useQueryStates':                lazy(() => import('./routes/routing.useQueryStates')),
  '/routing/useQueryStates/other':          lazy(() => import('./routes/routing.useQueryStates.other')),
  '/scroll':                                lazy(() => import('./routes/scroll')),

  // Local tests
  '/key-isolation/useQueryState':           lazy(() => import('./routes/key-isolation.useQueryState')),
  '/key-isolation/useQueryStates':          lazy(() => import('./routes/key-isolation.useQueryStates')),
  '/shallow/useQueryState':                 lazy(() => import('./routes/shallow.useQueryState')),
  '/shallow/useQueryStates':                lazy(() => import('./routes/shallow.useQueryStates')),
}

export function AppRouter() {
  const Route = routes[location.pathname]
  if (!Route) {
    return <>404 not found</>
  }
  return <Route />
}
