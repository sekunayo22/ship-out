import Icon from "../Icon"
import { StyledCheckbox } from "./styles"

export const Checkbox = ({
    isChecked,
    handleCheck,
  }: {
    isChecked: boolean
    handleCheck: () => void
  }) => {
    return (
      <StyledCheckbox
        isChecked={isChecked}
        onClick={e => {
          e.stopPropagation()
          handleCheck()
        }}
      >
        {isChecked ? <Icon icon='checkboxTick' /> : null}
      </StyledCheckbox>
    )
  }
  