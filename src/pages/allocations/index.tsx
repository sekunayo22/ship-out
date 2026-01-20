import {
  MainHeader,
  MainHeaderContainer,
  MainHeaderDescription,
  MainHeaderTitle,
  AllocationRoutesContainer,
} from "./styles"
import Layout from "../../components/Layout"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useMemo } from "react";
import bookings from "../../mock/bookings.json";
import { CustomTooltip } from "./CustomTooltip";
import { Archivo } from "../../styles/abstracts/colors";

export const Allocations = () => {

  const allocations = useMemo(() => {
    const capacity = 5
    return bookings.map(booking => {
      const teu = Number(booking.teu ?? 0)
      const utilisation = Math.min(100, Math.round((teu / capacity) * 100))
      return {
        teu,
        etdWeek: booking.etdWeek,
        voyageFlight: booking.voyageFlight,
        vessel: booking.vessel,
        utilisation,
        capacityStatus: utilisation >= 80 ? 'Over used' : 'Available',
      }
    })
  }, [bookings])

  return (
    <Layout>
      <AllocationRoutesContainer>
        <MainHeaderContainer>
          <MainHeader>
            <MainHeaderTitle>Allocations</MainHeaderTitle>
            <MainHeaderDescription>TEU Utilization by week</MainHeaderDescription>
          </MainHeader>
        </MainHeaderContainer>
          <ResponsiveContainer width="100%" height={600}>
            <LineChart data={allocations}>
              <CartesianGrid stroke="#C9CBCD" strokeDasharray="6 6" vertical={false} />
              <Line type="natural" dataKey="teu" stroke="#292D30" strokeWidth={4} />
              <XAxis fontFamily={Archivo} fontSize={15} color="#8D9092"   axisLine={false} dataKey="etdWeek" />
              <YAxis fontFamily={Archivo} fontSize={15} color="#8D9092"  axisLine={false} width="auto" label={{ value: 'teu', position: 'insideLeft', angle: -90 }} />
              <Tooltip content={<CustomTooltip />} />
            </LineChart>
          </ResponsiveContainer>
      </AllocationRoutesContainer>
    </Layout>
  )
}

export default Allocations