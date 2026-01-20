import {
  MainHeader,
  MainHeaderContainer,
  MainHeaderDescription,
  MainHeaderTitle,
  TableSection,
  AllocationRoutesContainer,
} from "./styles"
import Layout from "../../components/Layout"
import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react"
import type { CellContext, ColumnDef } from "@tanstack/react-table"
import Table from "../../components/Table"
import { useTableAutoPageSize } from "../../hooks/useTableAutoPageSize"
import { Checkbox } from "../../components/Checkbox"
import allocationRoutes from "../../mock/allocation_routes.json"
import type { AllocationRoute } from "../../types/allocationRoute"
import { DeleteModal } from "../../components/DeleteModal"
import { ViewModal } from "../../components/ViewModal"
import { Options } from "../../components/Options"
import type { IconNames } from "../../assets/icons/iconTypes"
import type { ButtonVariant } from "../../types/component"
import { css } from "@emotion/css"

export const AllocationRoutes = () => {
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const allocationRoutesTableRef = useRef<HTMLDivElement>(null)
  const [selectedAllocationRoutes, setSelectedAllocationRoutes] = useState<string[]>([])
  const [selectedAllocationRoute, setSelectedAllocationRoute] = useState<{ [key: string]: string | number | null | undefined }>({})
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [openViewModal, setOpenViewModal] = useState(false)

    const handleAllocationRouteCheck = useCallback((allocationRouteId: string) => {
    setSelectedAllocationRoutes(prev =>
      prev.includes(allocationRouteId)
        ? prev.filter(id => id !== allocationRouteId)
        : [...prev, allocationRouteId]
    )
  }, [])

  const handleToggleAllAllocationRoutes = useCallback(() => {
    setSelectedAllocationRoutes(prev =>
      prev.length === allocationRoutes.length
        ? []
        : allocationRoutes.map(allocationRoute => allocationRoute.id)
    )
  }, [setSelectedAllocationRoutes])
  
  const columns = useMemo<ColumnDef<AllocationRoute>[]>(() => [
    {
      header: () => (
        <Checkbox
          isChecked={selectedAllocationRoutes.length > 0 && selectedAllocationRoutes.length === allocationRoutes.length}
          handleCheck={handleToggleAllAllocationRoutes}
        />
      ),
      accessorKey: 'id',
      size: 50,
      cell: (info: CellContext<AllocationRoute, unknown>) => {
        return (
          <Checkbox
            isChecked={selectedAllocationRoutes.includes(String(info.getValue()))}
            handleCheck={() => handleAllocationRouteCheck(String(info.getValue()))}
          />
        )
      },
    },
    {
      header: 'Service String',
      accessorKey: 'serviceString',
    },
    {
      header: 'Voyage',
      accessorKey: 'voyage',
    },
    {
      header: 'Vessel',
      accessorKey: 'vessel',
    },
    {
      header: 'Linked Schedule ETD',
      accessorKey: 'linkedScheduleEtd',
    },
    {
      header: 'Linked Schedule ETA',
      accessorKey: 'linkedScheduleEta',
    },
    {
      cell: (info: CellContext<AllocationRoute, unknown>) => (
        <Options handleDelete={() => {
          setOpenDeleteModal(true)
          setSelectedAllocationRoute(info.row.original)
        }} handleView={() => {
          setOpenViewModal(true)
          setSelectedAllocationRoute(info.row.original)
        }} />
      ),
    header: 'Actions'
    },
  ], [handleAllocationRouteCheck, selectedAllocationRoutes])

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

  const totalPages = Math.max(1, Math.ceil(allocationRoutes.length / pageSize))

  useTableAutoPageSize(allocationRoutesTableRef, setPageSize)

  useLayoutEffect(() => {
    if (page > totalPages - 1) {
      setPage(0)
    }
  }, [page, totalPages])

  return (
    <Layout>
      <AllocationRoutesContainer>
        <MainHeaderContainer>
          <MainHeader>
            <MainHeaderTitle>Allocation Routes</MainHeaderTitle>
            <MainHeaderDescription>View and manage all allocation routes</MainHeaderDescription>
          </MainHeader>
        </MainHeaderContainer>
        <TableSection ref={allocationRoutesTableRef}>
          <Table
            data={{
              content: allocationRoutes,
              totalPages,
              totalElements: allocationRoutes.length,
            }}
            columns={columns}
            page={page}
            pageSize={pageSize}
            handlePageChange={nextPage => setPage(Math.max(0, Math.min(nextPage, totalPages - 1)))}
            selectedItems={selectedAllocationRoutes}
            buttonActions={buttonActions}
          />
        </TableSection>
      </AllocationRoutesContainer>
      <ViewModal toggleModal={openViewModal} setToggleModal={setOpenViewModal} title="Allocation Route Details" payload={selectedAllocationRoute} />
      <DeleteModal toggleModal={openDeleteModal} setToggleModal={setOpenDeleteModal} title="Allocation Route" id={selectedAllocationRoute.id as string} />
    </Layout>
  )
}

export default AllocationRoutes