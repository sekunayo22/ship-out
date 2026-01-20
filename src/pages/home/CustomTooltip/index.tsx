import { CustomTooltipContainer, CustomTooltipLabel } from "./styles";

export const CustomTooltip = ({ payload, label, active }: any) => {
  if (!active || !payload || !payload.length) return null

  return (
    <CustomTooltipContainer>
      <CustomTooltipLabel>{`Vessel: ${label}`}</CustomTooltipLabel>
      <CustomTooltipLabel>{`Utilisation: ${payload[0]?.payload?.utilisation}`}</CustomTooltipLabel>
      <CustomTooltipLabel>{`Outstanding Committed: ${payload[0]?.payload?.outstandingCommitted}`}</CustomTooltipLabel>
    </CustomTooltipContainer>
  )
}