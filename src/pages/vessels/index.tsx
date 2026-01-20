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
import { Options } from "../../components/Options"
import type { Vessel } from "../../types/vessel"
import { CreateNewVessel } from "./CreateNewVessel"
import { ViewModal } from "../../components/ViewModal"
import { EditVesselModal } from "./EditNewVessel"
import { DeleteModal } from "../../components/DeleteModal"
import type { IconNames } from "../../assets/icons/iconTypes"
import type { ButtonVariant } from "../../types/component"
import { css } from "@emotion/css"

export const Vessels = () => {
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const tableSectionRef = useRef<HTMLDivElement>(null)
  const [selectedVessels, setSelectedVessels] = useState<string[]>([])
  const [openCreateNewVesselModal, setOpenCreateNewVesselModal] = useState(false)
  const [openViewModal, setOpenViewModal] = useState(false)
  const [openEditNewVesselModal, setOpenEditNewVesselModal] = useState(false)
  const [selectedVessel, setSelectedVessel] = useState<{ [key: string]: string | number | null | undefined }>({})
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const handleVesselCheck = useCallback((vesselId: string) => {
    setSelectedVessels(prev =>
      prev.includes(vesselId)
        ? prev.filter(id => id !== vesselId)
        : [...prev, vesselId]
    )
  }, [setSelectedVessels])

  const handleToggleAllVessels = useCallback(() => {
    setSelectedVessels(prev =>
      prev.length === vessels.length
        ? []
        : vessels.map(vessel => vessel.id)
    )
  }, [setSelectedVessels])

  const columns = useMemo<ColumnDef<Vessel>[]>(() => [
    {
      header: () => (
        <Checkbox
          isChecked={selectedVessels.length > 0 && selectedVessels.length === vessels.length}
          handleCheck={handleToggleAllVessels}
        />
      ),
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
      accessorKey: 'name',
    },
    {
      header: 'Loop',
      accessorKey: 'loop',
    },
    {
      header: 'Port',
      accessorKey: 'port',
    },
    {
      header: 'ETD',
      accessorKey: 'etd',
    },
    {
      header: 'ETA',
      accessorKey: 'eta',
    },
    {
      header: 'WeekNum',
      accessorKey: 'weekNum',
    },
    {
      header: 'Allocation',
      accessorKey: 'allocation',
    },
    {
      cell: (info: CellContext<Vessel, unknown>) => (
        <Options handleDelete={() => {
          setOpenDeleteModal(true)
          setSelectedVessel(info.row.original)
        }} handleEdit={() => {
          setOpenEditNewVesselModal(true)
          setSelectedVessel(info.row.original)
        }} handleView={() => {
          setOpenViewModal(true)
          setSelectedVessel(info.row.original)
        }} />
      ),
    header: 'Actions'
    },
  ], [handleToggleAllVessels, handleVesselCheck, selectedVessels])

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
          <Button variant="primary" type="button" label="Create New Vessel" handleClick={() => setOpenCreateNewVesselModal(true)} />
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
            selectedItems={selectedVessels}
            buttonActions={buttonActions}
          />
        </TableSection>
      </VesselsContainer>
      <CreateNewVessel toggleModal={openCreateNewVesselModal} setToggleModal={setOpenCreateNewVesselModal} />
      <ViewModal toggleModal={openViewModal} setToggleModal={setOpenViewModal} title="Vessel Details" payload={selectedVessel} />
      <EditVesselModal toggleModal={openEditNewVesselModal} setToggleModal={setOpenEditNewVesselModal} vessel={selectedVessel} />
      <DeleteModal toggleModal={openDeleteModal} setToggleModal={setOpenDeleteModal} title="Vessel" id={selectedVessel.id as string} />
    </Layout>
  )
}

export default Vessels