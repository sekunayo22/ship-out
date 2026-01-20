import { CustomLegendContainer, CustomLegendItem, CustomLegendDot } from "./styles";

type LegendItem = { color?: string; value?: string }
type LabelMap = Record<string, string>

export const CustomLegend = ({
  payload,
  labelMap,
}: {
  payload?: ReadonlyArray<LegendItem>
  labelMap?: LabelMap
}) => {
  if (!payload?.length) return null

  return (
    <CustomLegendContainer>
      {payload.map(item => (
        <CustomLegendItem key={item.value}>
          <CustomLegendDot
            color={item.color}
          />
          {labelMap?.[item.value ?? ''] ?? item.value}
        </CustomLegendItem>
      ))}
    </CustomLegendContainer>
  )
}