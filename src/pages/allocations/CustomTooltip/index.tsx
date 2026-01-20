import { CustomTooltipContainer, CustomTooltipLabel } from "./styles";

export const CustomTooltip = ({ payload, label, active }: any) => {
  if (!active || !payload || !payload.length) return null

  return (
    <CustomTooltipContainer>
      <CustomTooltipLabel>{`ETD Week: ${label}`}</CustomTooltipLabel>
      <CustomTooltipLabel>{`TEU: ${payload[0]?.payload?.teu}`}</CustomTooltipLabel>
      {payload[0]?.payload?.voyageFlight     ? (
        <CustomTooltipLabel>{`Voyages: ${payload[0]?.payload?.voyageFlight}`}</CustomTooltipLabel>
      ) : null}
      {payload[0]?.payload?.capacityStatus ? (
        <CustomTooltipLabel>{`Capacity: ${payload[0]?.payload?.capacityStatus}`}</CustomTooltipLabel>
      ) : null}
      <CustomTooltipLabel>{`Utilisation: ${payload[0]?.payload?.utilisation}%`}</CustomTooltipLabel>
    </CustomTooltipContainer>
  )
}