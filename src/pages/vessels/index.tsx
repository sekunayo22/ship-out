import {
  MainHeader,
  MainHeaderContainer,
  MainHeaderDescription,
  MainHeaderTitle,
  TableSection,
  VesselsContainer,
} from "./styles"
import Layout from "../../components/Layout"
import Button from "../../components/Button"
import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react"
import type { CellContext, ColumnDef } from "@tanstack/react-table"
import Table from "../../components/Table"
import vessels from "../../mock/vessels.json"
import { useTableAutoPageSize } from "../../hooks/useTableAutoPageSize"
import { Checkbox } from "../../components/Checkbox"
import type { Vessel } from "../../types/vessel"

export const Vessels = () => {
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const tableSectionRef = useRef<HTMLDivElement>(null)
  const [selectedVessels, setSelectedVessels] = useState<string[]>([])

  const handleVesselCheck = useCallback((vesselId: string) => {
    setSelectedVessels(prev =>
      prev.includes(vesselId)
        ? prev.filter(id => id !== vesselId)
        : [...prev, vesselId]
    )
  }, [])
  
  const columns = useMemo<ColumnDef<Vessel>[]>(() => [
    {
      header: '',
      accessorKey: 'id',
      size: 50,
      cell: (info: CellContext<Vessel, unknown>) => {
        return (
          <Checkbox
            isChecked={selectedVessels.includes(String(info.getValue()))}
            handleCheck={() => handleVesselCheck(String(info.getValue()))}
          />
        )
      },
    },
    {
      header: 'Name',
      accessorKey: 'Name',
    },
    {
      header: 'Loop',
      accessorKey: 'Loop',
    },
    {
      header: 'Port',
      accessorKey: 'Port',
    },
    {
      header: 'ETD',
      accessorKey: 'ETD',
    },
    {
      header: 'ETA',
      accessorKey: 'ETA',
    },
    {
      header: 'WeekNum',
      accessorKey: 'WeekNum',
    },
    {
      header: 'Allocation',
      accessorKey: 'Allocation',
    },
  ], [handleVesselCheck, selectedVessels])

  const totalPages = Math.max(1, Math.ceil(vessels.length / pageSize))

  useTableAutoPageSize(tableSectionRef, setPageSize)

  useLayoutEffect(() => {
    if (page > totalPages - 1) {
      setPage(0)
    }
  }, [page, totalPages])

  return (
    <Layout>
      <VesselsContainer>
        <MainHeaderContainer>
          <MainHeader>
            <MainHeaderTitle>Vessels</MainHeaderTitle>
            <MainHeaderDescription>View and manage all vessels being used to transport the goods.</MainHeaderDescription>
          </MainHeader>
          <Button variant="primary" type="button" label="Create New Vessel" />
        </MainHeaderContainer>
        <TableSection ref={tableSectionRef}>
          <Table
            data={{
              content: vessels,
              totalPages,
              totalElements: vessels.length,
            }}
            columns={columns}
            page={page}
            pageSize={pageSize}
            handlePageChange={nextPage => setPage(Math.max(0, Math.min(nextPage, totalPages - 1)))}
          />
        </TableSection>
      </VesselsContainer>
    </Layout>
  )
}

export default Vessels