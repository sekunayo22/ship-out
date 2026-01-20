import Icon from "../Icon";
import { PillContainer } from "./styles";

interface PillProps {
  label: string
  status?: 'up' | 'down'
}

export const Pill = ({ label, status }: PillProps) => {
  return <PillContainer status={status}>{label} <Icon icon={status === 'up' ? 'arrowUp' : 'arrowDown'} /></PillContainer>
}