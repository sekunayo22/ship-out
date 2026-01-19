import Loader from './components/Loader'
import { Global } from '@emotion/react'
import { normalize } from './styles/base/reset'
import { Route, Routes } from 'react-router-dom'
import Vessels from './pages/vessels'
import { Suspense } from 'react'

function App() {
  return (
    <>
      <Global styles={normalize} />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/vessels" element={<Vessels />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
