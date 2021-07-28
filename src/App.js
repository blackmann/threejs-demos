import React, { Suspense } from 'react'

const Index = React.lazy(() => import('./pages/index.jsx'))

function App() {
  return (
    <Suspense fallback={null}>
      <div>
        <Index />
      </div>
    </Suspense>
  )
}

export default App
