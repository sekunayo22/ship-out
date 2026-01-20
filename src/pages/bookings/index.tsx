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
import { Options } from "../../components/Options"
import { ViewModal } from "../../components/ViewModal"
import { DeleteModal } from "../../components/DeleteModal"
import type { IconNames } from "../../assets/icons/iconTypes"
import type { ButtonVariant } from "../../types/component"
import { css } from "@emotion/css"

export const Bookings = () => {
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const bookingsTableRef = useRef<HTMLDivElement>(null)
  const [selectedBookings, setSelectedBookings] = useState<string[]>([])
  const [selectedBooking, setSelectedBooking] = useState<{ [key: string]: string | number | null | undefined }>({})
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [openViewModal, setOpenViewModal] = useState(false)

    const handleBookingCheck = useCallback((bookingId: string) => {
    setSelectedBookings(prev =>
      prev.includes(bookingId)
        ? prev.filter(id => id !== bookingId)
        : [...prev, bookingId]
    )
  }, [])

  const handleToggleAllBookings = useCallback(() => {
    setSelectedBookings(prev =>
      prev.length === bookings.length
        ? []
        : bookings.map(booking => booking.id)
    )
  }, [setSelectedBookings])
  
  const columns = useMemo<ColumnDef<Booking>[]>(() => [
    {
      header: () => (
        <Checkbox
          isChecked={selectedBookings.length > 0 && selectedBookings.length === bookings.length}
          handleCheck={handleToggleAllBookings}
        />
      ),
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
    },
    {
      cell: (info: CellContext<Booking, unknown>) => (
        <Options handleDelete={() => {
          setOpenDeleteModal(true)
          setSelectedBooking(info.row.original)
        }} handleView={() => {
          setOpenViewModal(true)
          setSelectedBooking(info.row.original)
        }} />
      ),
    header: 'Actions'
    },
  ], [handleBookingCheck, selectedBookings])

  const buttonActions = useMemo(() => [
    {
      label: 'Filters',
      handleClick: () => {
        console.log('Filters')
      },
      icon: 'filter' as IconNames,
      variant: 'secondary' as ButtonVariant,  
      className: css({
        border: 'none !important',
      }),
    },
    {
      label: 'Export All',
      handleClick: () => {
        console.log('Export All')
      },
      icon: 'upload' as IconNames,
      variant: 'secondary' as ButtonVariant,
    },
  ], [setOpenDeleteModal])

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
            buttonActions={buttonActions}
            page={page}
            pageSize={pageSize}
            handlePageChange={nextPage => setPage(Math.max(0, Math.min(nextPage, totalPages - 1)))}
            selectedItems={selectedBookings}
          />
        </TableSection>
      </BookingsContainer>
      <ViewModal toggleModal={openViewModal} setToggleModal={setOpenViewModal} title="Booking Details" payload={selectedBooking} />
      <DeleteModal toggleModal={openDeleteModal} setToggleModal={setOpenDeleteModal} title="Booking" id={selectedBooking.id as string} />
    </Layout>
  )
}

export default Bookings