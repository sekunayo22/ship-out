import Loader from './components/Loader'
import { Global } from '@emotion/react'
import { normalize } from './styles/base/reset'
import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const HomePage = lazy(() => import('./pages/home'))
const VesselsPage = lazy(() => import('./pages/vessels'))
const BookingsPage = lazy(() => import('./pages/bookings'))
const AllocationRoutesPage = lazy(() => import('./pages/allocation_routes'))
const AllocationsPage = lazy(() => import('./pages/allocations'))

function App() {
  return (
    <>
      <Global styles={normalize} />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vessels" element={<VesselsPage />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/allocation-routes" element={<AllocationRoutesPage />} />
          <Route path="/allocations" element={<AllocationsPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
