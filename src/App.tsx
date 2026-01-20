import Loader from './components/Loader'
import { Global } from '@emotion/react'
import { normalize } from './styles/base/reset'
import { Route, Routes } from 'react-router-dom'
import Vessels from './pages/vessels'
import { Suspense } from 'react'
import { Bookings } from './pages/bookings'
import AllocationRoutes from './pages/allocation_routes'
import { Allocations } from './pages/allocations'
import { Home } from './pages/home'

function App() {
  return (
    <>
      <Global styles={normalize} />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vessels" element={<Vessels />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/allocation-routes" element={<AllocationRoutes />} />
          <Route path="/allocations" element={<Allocations />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
