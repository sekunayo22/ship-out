import type { TooltipProps } from "recharts"
import { CustomTooltipContainer, CustomTooltipLabel } from "./styles"

type HomeTooltipPayload = {
  utilisation?: number
  outstandingCommitted?: number
}

export const CustomTooltip = ({
  payload,
  label,
  active,
}: TooltipProps<number, string>) => {
  if (!active || !payload || !payload.length) return null
  const payloadData = payload[0]?.payload as HomeTooltipPayload | undefined

  return (
    <CustomTooltipContainer>
      <CustomTooltipLabel>{`Vessel: ${label}`}</CustomTooltipLabel>
      <CustomTooltipLabel>{`Utilisation: ${payloadData?.utilisation}`}</CustomTooltipLabel>
      <CustomTooltipLabel>{`Outstanding Committed: ${payloadData?.outstandingCommitted}`}</CustomTooltipLabel>
    </CustomTooltipContainer>
  )
}