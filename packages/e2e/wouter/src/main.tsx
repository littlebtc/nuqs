import { NuqsAdapter, enableHistorySync } from 'nuqs/adapters/wouter'
import { createRoot } from 'react-dom/client'
import { Router } from 'wouter'
import { RootLayout } from './layout'
import { AppRouter } from './routes'

enableHistorySync()

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <Router>
    <NuqsAdapter>
      <RootLayout>
        <AppRouter />
      </RootLayout>
    </NuqsAdapter>
  </Router>
  // </StrictMode>
)
