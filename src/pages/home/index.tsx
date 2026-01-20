import {
  MainHeader,
  MainHeaderContainer,
  MainHeaderDescription,
  MainHeaderTitle,
  AllocationRoutesContainer,
} from "./styles"
import Layout from "../../components/Layout"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export const Home = () => {

  return (
    <Layout>
      <AllocationRoutesContainer>
        <MainHeaderContainer>
          <MainHeader>
            <MainHeaderTitle>Home</MainHeaderTitle>
            <MainHeaderDescription>Hello Admin, how are you doing today?</MainHeaderDescription>
          </MainHeader>
        </MainHeaderContainer>
          <ResponsiveContainer width="100%" height={600}>
            <LineChart data={[{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }]}>
              <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="uv" stroke="purple" strokeWidth={2} />
              <XAxis dataKey="name" />
              <YAxis width="auto" label={{ value: 'uv', position: 'insideLeft', angle: -90 }} />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
      </AllocationRoutesContainer>
    </Layout>
  )
}

export default Home