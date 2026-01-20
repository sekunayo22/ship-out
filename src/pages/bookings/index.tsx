import {
  MainHeader,
  MainHeaderContainer,
  MainHeaderDescription,
  MainHeaderTitle,
  TableSection,
  BookingsContainer,
} from "./styles"
import Layout from "../../components/Layout"
import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react"
import type { CellContext, ColumnDef } from "@tanstack/react-table"
import Table from "../../components/Table"
import { useTableAutoPageSize } from "../../hooks/useTableAutoPageSize"
import { Checkbox } from "../../components/Checkbox"
import type { Booking } from "../../types/booking"
import bookings from "../../mock/bookings.json"

export const Bookings = () => {
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const bookingsTableRef = useRef<HTMLDivElement>(null)
  const [selectedBookings, setSelectedBookings] = useState<string[]>([])

    const handleBookingCheck = useCallback((bookingId: string) => {
    setSelectedBookings(prev =>
      prev.includes(bookingId)
        ? prev.filter(id => id !== bookingId)
        : [...prev, bookingId]
    )
  }, [])
  
  const columns = useMemo<ColumnDef<Booking>[]>(() => [
    {
      header: '',
      accessorKey: 'id',
      size: 50,
      cell: (info: CellContext<Booking, unknown>) => {
        return (
          <Checkbox
            isChecked={selectedBookings.includes(String(info.getValue()))}
            handleCheck={() => handleBookingCheck(String(info.getValue()))}
          />
        )
      },
    },
    {
      header: 'ETD_Origin',
      accessorKey: 'etdOrigin',
    },
    {
      header: 'Reference',
      accessorKey: 'reference',
    },
    {
      header: 'Trans.',
      accessorKey: 'trans',
    },
    {
      header: 'Master Bill',
      accessorKey: 'masterBill',
    },
    {
      header: 'Loading',
      accessorKey: 'loading',
    }
  ], [handleBookingCheck, selectedBookings])

  const totalPages = Math.max(1, Math.ceil(bookings.length / pageSize))

  useTableAutoPageSize(bookingsTableRef, setPageSize)

  useLayoutEffect(() => {
    if (page > totalPages - 1) {
      setPage(0)
    }
  }, [page, totalPages])

  return (
    <Layout>
      <BookingsContainer>
        <MainHeaderContainer>
          <MainHeader>
            <MainHeaderTitle>Bookings</MainHeaderTitle>
            <MainHeaderDescription>View and manage all orders that customers have made</MainHeaderDescription>
          </MainHeader>
        </MainHeaderContainer>
        <TableSection ref={bookingsTableRef}>
          <Table
            data={{
              content: bookings,
              totalPages,
              totalElements: bookings.length,
            }}
            columns={columns}
            page={page}
            pageSize={pageSize}
            handlePageChange={nextPage => setPage(Math.max(0, Math.min(nextPage, totalPages - 1)))}
          />
        </TableSection>
      </BookingsContainer>
    </Layout>
  )
}

export default Bookings