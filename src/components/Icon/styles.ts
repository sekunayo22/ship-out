import { css } from '@emotion/css'
import styled from '@emotion/styled'

export const StyledIcon = styled.span<{ icon: boolean }>`
  ${props =>
    props.icon &&
    css`
      display: flex;
      height: fit-content;
      width: fit-content;
    `}
`
