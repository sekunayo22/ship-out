import styled from '@emotion/styled'
import { black, grey02 } from '../../styles/abstracts/colors'

export const StyledCheckbox = styled.button<{ isChecked: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ isChecked }) => (isChecked ? 'none' : `1px solid ${grey02}`)};
  background-color: ${({ isChecked }) =>
    isChecked ? black : 'transparent'};
  cursor: pointer;
`
