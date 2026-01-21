import { CustomTooltipContainer, CustomTooltipLabel } from "./styles"

type AllocationTooltipPayload = {
  teu?: number
  voyageFlight?: number | string
  capacityStatus?: string
  utilisation?: number
}

export const CustomTooltip = ({
  payload,
  label,
  active,
}: any) => {
  if (!active || !payload || !payload.length) return null
  const payloadData = payload[0]?.payload as AllocationTooltipPayload | undefined

  return (
    <CustomTooltipContainer>
      <CustomTooltipLabel>{`ETD Week: ${label}`}</CustomTooltipLabel>
      <CustomTooltipLabel>{`TEU: ${payloadData?.teu}`}</CustomTooltipLabel>
      {payloadData?.voyageFlight ? (
        <CustomTooltipLabel>{`Voyages: ${payloadData?.voyageFlight}`}</CustomTooltipLabel>
      ) : null}
      {payloadData?.capacityStatus ? (
        <CustomTooltipLabel>{`Capacity: ${payloadData?.capacityStatus}`}</CustomTooltipLabel>
      ) : null}
      <CustomTooltipLabel>{`Utilisation: ${payloadData?.utilisation}%`}</CustomTooltipLabel>
    </CustomTooltipContainer>
  )
}