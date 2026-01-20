import Icon from "../Icon";
import { Pill } from "../Pill";
import { CardContainer, CardDescription, CardHeader, CardOptions, CardTitle } from "./styles";

interface CardProps {
  title?: string
  description?: string
  percentage?: {
    value: number
    status: 'up' | 'down'
  }
}

export const Card = ({  title, description, percentage }: CardProps) => {
  return <CardContainer>
    <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardOptions><Icon icon='ellipsis' /></CardOptions>
    </CardHeader>
    <CardDescription>{description} <Pill label={`${percentage?.value}%`} status={percentage?.status} /></CardDescription>
  </CardContainer>
}