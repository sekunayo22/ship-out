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

export const AllocationRoutes = () => {
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const allocationRoutesTableRef = useRef<HTMLDivElement>(null)
  const [selectedAllocationRoutes, setSelectedAllocationRoutes] = useState<string[]>([])

    const handleAllocationRouteCheck = useCallback((allocationRouteId: string) => {
    setSelectedAllocationRoutes(prev =>
      prev.includes(allocationRouteId)
        ? prev.filter(id => id !== allocationRouteId)
        : [...prev, allocationRouteId]
    )
  }, [])
  
  const columns = useMemo<ColumnDef<AllocationRoute>[]>(() => [
    {
      header: '',
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
    }
  ], [handleAllocationRouteCheck, selectedAllocationRoutes])

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
          />
        </TableSection>
      </AllocationRoutesContainer>
    </Layout>
  )
}

export default AllocationRoutes