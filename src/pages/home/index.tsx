import {
  MainHeader,
  MainHeaderContainer,
  MainHeaderDescription,
  MainHeaderTitle,
  HomeContainer,
  TableSection,
  TableSectionContent,
  DonutSection,
  DonutTitle,
  TableSectionContainer,
  TableSectionHeader,
  TableSectionHeaderTitle,
  CardContainer,
} from "./styles"
import Layout from "../../components/Layout"
import { Bar, BarChart, CartesianGrid, Cell, Label, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useMemo } from "react";
import { CustomTooltip } from "./CustomTooltip";
import { CustomLegend } from "./CustomLegend";
import { Archivo } from "../../styles/abstracts/colors";
import Table from "../../components/Table";
import Button from "../../components/Button";
import { Card } from "../../components/Card";
import { useGetVoyagesQuery } from "../../services/apis/voyage";
import { useGetAllocationRoutesQuery } from "../../services/apis/allocationRoute";
import { useGetBookingsQuery } from "../../services/apis/booking";
import { useGetVesselsQuery } from "../../services/apis/vessel";

export const Home = () => {
  const { data: voyages, isLoading: voyagesLoading } = useGetVoyagesQuery()
  const {data: allocationRoutes, isLoading: allocationRoutesLoading} = useGetAllocationRoutesQuery()
  const {data: bookings, isLoading: bookingsLoading} = useGetBookingsQuery()
  const {data: vessels, isLoading: vesselsLoading} = useGetVesselsQuery()

  const teuAllocations = useMemo(() => {
    return Array.from({ length: 7 }, (_, index) => {
      return {
        vessel: allocationRoutes?.[index]?.vessel,
        utilisation: allocationRoutes?.[index]?.utilization,
        outstandingCommitted: allocationRoutes?.[index]?.outstandingCommited,
      }
    })
  }, [allocationRoutes])

  console.log(teuAllocations)

  const totalPages = Math.max(1, Math.ceil((voyages?.length ?? 0) / 5))

  const columns = useMemo(() => [ 
    {
      header: 'Name',
      accessorKey: 'name',
    },
    {
      header: 'Service String',
      accessorKey: 'serviceString',
    },
    {
      header: 'ETD',
      accessorKey: 'etd',
    },
  ], [])

  const totalVessels = useMemo(() => {
    return vessels?.length ?? 0
  }, [vessels])
  const totalBookings = useMemo(() => {
    return bookings?.length ?? 0
  }, [bookings])

  const totalTEUAllocated = useMemo(() => {
    return bookings?.reduce((acc, curr) => acc + curr.teu, 0) ?? 0
  }, [bookings])

  const totalTeuUtilisation = useMemo(() => {
    return allocationRoutes?.reduce((acc, curr) => acc + curr.utilization, 0) ?? 0
  }, [allocationRoutes])

  const isLoading = useMemo(() => {
    return voyagesLoading || allocationRoutesLoading || bookingsLoading || vesselsLoading
  }, [voyagesLoading, allocationRoutesLoading, bookingsLoading, vesselsLoading])

  const totalTeuUtilisationPercentage = useMemo(() => {
    return Math.round(((totalTeuUtilisation - totalTEUAllocated) / totalTEUAllocated) * 100) % 100
  }, [totalTeuUtilisation, totalTEUAllocated])


  return (
    <Layout isLoading={isLoading}>
      <HomeContainer>
        <MainHeaderContainer>
          <MainHeader>
            <MainHeaderTitle>Home</MainHeaderTitle>
            <MainHeaderDescription>Hello Admin, how are you doing today?</MainHeaderDescription>
          </MainHeader>
        </MainHeaderContainer>
        <CardContainer>
          <Card title="Total Vessels" description={totalVessels} percentage={{ value: 28.4, status: 'up' }} />
          <Card title="Total Bookings" description={totalBookings} percentage={{ value: 12.6, status: 'down' }} />
          <Card title="Total TEU Allocated" description={totalTEUAllocated} percentage={{ value: 3.1, status: 'up' }} />
        </CardContainer>
              <BarChart barGap={16} style={{ width: '100%', maxHeight: '70vh', aspectRatio: 1.618 }} responsive data={teuAllocations}>
                <CartesianGrid vertical={false} />
                <XAxis fontFamily={Archivo} fontSize={15} color="#8D9092" dataKey="vessel" />
                <YAxis fontFamily={Archivo} fontSize={15} color="#8D9092" width="auto" />
                <Tooltip content={<CustomTooltip />} cursor={false} />
                <Legend
                  content={props => (
                    <CustomLegend
                      {...props}
                      labelMap={{
                        outstandingCommitted: 'Under used',
                        utilisation: 'Over used',
                      }}
                    />
                  )}
                />
                <Bar barSize={61.81} fill="#EE6C4D" radius={[9, 9, 9, 9]} dataKey="outstandingCommitted"/>
                <Bar barSize={61.81} fill="#000"  radius={[9, 9, 9, 9]} dataKey="utilisation"/>
              </BarChart>
            <TableSectionContent>
            <TableSectionContainer>
              <TableSectionHeader>
                <TableSectionHeaderTitle>
                Top 5 Voyages
                </TableSectionHeaderTitle>
                <Button variant="secondary" iconName="upload" iconPosition="left" type="button" label="Export All" handleClick={() => {}} />
              </TableSectionHeader>
            <TableSection>
              <Table
                data={{
                  content: voyages?.slice(0, 5),
                  totalPages,
                  totalElements: voyages?.length,
                }}
                columns={columns}
                pageSize={5}
                page={0}
              />
              </TableSection>
              
            </TableSectionContainer>
           
              <DonutSection>
                <DonutTitle>TEU Utilisation (%)</DonutTitle>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Utilisation', value: totalTeuUtilisationPercentage },
                        { name: 'Remaining', value: 100 - totalTeuUtilisationPercentage },
                      ]}
                      dataKey="value"
                      nameKey="name"
                      outerRadius="80%"
                      innerRadius="55%"
                      cornerRadius={60}
                    >
                      <Cell fill="#EE6C4D" />
                      <Cell fill="#ECEDEE" />
                      <Label fontSize={36} fontWeight={500} value={`${totalTeuUtilisationPercentage}%`} fontFamily={Archivo} position="center" fill="#292D30s" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </DonutSection>
            </TableSectionContent>
         
      </HomeContainer>
    </Layout> 
  )
}

export default Home