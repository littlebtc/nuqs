import { lazy, Suspense } from 'react'
import { Route, Switch } from 'wouter'

export function AppRouter() {
  return (
    <Suspense>
      <Switch>
        {/* Shared E2E tests */}
        <Route path="/basic-io/useQueryState"                component={lazy(() => import('./routes/basic-io.useQueryState'))} />
        <Route path="/basic-io/useQueryStates"               component={lazy(() => import('./routes/basic-io.useQueryStates'))} />
        <Route path="/conditional-rendering/useQueryState"   component={lazy(() => import('./routes/conditional-rendering.useQueryState'))} />
        <Route path="/conditional-rendering/useQueryStates"  component={lazy(() => import('./routes/conditional-rendering.useQueryStates'))} />
        <Route path="/form/useQueryState"                    component={lazy(() => import('./routes/form.useQueryState'))} />
        <Route path="/form/useQueryStates"                   component={lazy(() => import('./routes/form.useQueryStates'))} />
        <Route path="/hash-preservation"                     component={lazy(() => import('./routes/hash-preservation'))} />
        <Route path="/history-sync"                          component={lazy(() => import('./routes/history-sync'))} />
        <Route path="/json"                                  component={lazy(() => import('./routes/json'))} />
        <Route path="/life-and-death"                        component={lazy(() => import('./routes/life-and-death'))} />
        <Route path="/linking/useQueryState"                 component={lazy(() => import('./routes/linking.useQueryState'))} />
        <Route path="/linking/useQueryState/other"           component={lazy(() => import('./routes/linking.useQueryState.other'))} />
        <Route path="/linking/useQueryStates"                component={lazy(() => import('./routes/linking.useQueryStates'))} />
        <Route path="/linking/useQueryStates/other"          component={lazy(() => import('./routes/linking.useQueryStates.other'))} />
        <Route path="/native-array"                          component={lazy(() => import('./routes/native-array'))} />
        <Route path="/pretty-urls"                           component={lazy(() => import('./routes/pretty-urls'))} />
        <Route path="/referential-stability/useQueryState"   component={lazy(() => import('./routes/referential-stability.useQueryState'))} />
        <Route path="/referential-stability/useQueryStates"  component={lazy(() => import('./routes/referential-stability.useQueryStates'))} />
        <Route path="/routing/useQueryState"                 component={lazy(() => import('./routes/routing.useQueryState'))} />
        <Route path="/routing/useQueryState/other"           component={lazy(() => import('./routes/routing.useQueryState.other'))} />
        <Route path="/routing/useQueryStates"                component={lazy(() => import('./routes/routing.useQueryStates'))} />
        <Route path="/routing/useQueryStates/other"          component={lazy(() => import('./routes/routing.useQueryStates.other'))} />
        <Route path="/scroll"                                component={lazy(() => import('./routes/scroll'))} />

        {/* Local tests */}
        <Route path="/key-isolation/useQueryState"           component={lazy(() => import('./routes/key-isolation.useQueryState'))} />
        <Route path="/key-isolation/useQueryStates"          component={lazy(() => import('./routes/key-isolation.useQueryStates'))} />
        <Route path="/shallow/useQueryState"                 component={lazy(() => import('./routes/shallow.useQueryState'))} />
        <Route path="/shallow/useQueryStates"                component={lazy(() => import('./routes/shallow.useQueryStates'))} />

        <Route>404 not found</Route>
      </Switch>
    </Suspense>
  )
}
