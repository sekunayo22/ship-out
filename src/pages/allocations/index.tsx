import {
  MainHeader,
  MainHeaderContainer,
  MainHeaderDescription,
  MainHeaderTitle,
  AllocationRoutesContainer,
} from "./styles"
import Layout from "../../components/Layout"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { CustomTooltip } from "./CustomTooltip";
import { Archivo } from "../../styles/abstracts/colors";
import { useGetAllocationsQuery } from "../../services/apis/allocation";

export const Allocations = () => {
  const { data: allocations, isLoading } = useGetAllocationsQuery()

  return (
    <Layout isLoading={isLoading || !allocations?.length}>
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