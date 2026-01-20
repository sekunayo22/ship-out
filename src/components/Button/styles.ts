import styled from '@emotion/styled'
import type { ButtonVariant, ButtonSize } from '../../types/component'
import { black, grey, secondary02, white } from '../../styles/abstracts/colors'

export const StyledButton = styled.button<{
  variant: ButtonVariant
  size: ButtonSize
  iconPosition: 'left' | 'right' | undefined
  loading?: boolean
}>`
  display: flex;
  height: 48px;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: fit-content;
  border-radius: 4px;
  font-family: Archivo;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; 
  cursor: ${({ loading }) => (loading ? 'not-allowed' : 'pointer')};
  border: ${({ variant, loading }) =>
    getButtonProps(variant, loading)?.border} !important;
  background-color: ${({ variant, loading }) =>
    getButtonProps(variant, loading)?.backgroundColor} !important;
  color: ${({ variant, loading }) =>
    getButtonProps(variant, loading)?.color} !important;
  white-space: nowrap;
  flex-direction: ${({ iconPosition }) =>
    iconPosition === 'left' ? 'row' : 'row-reverse'};
  & svg {
    fill: ${({ variant }) => (variant === 'primary' ? white : '#626262')};
    width: 8px;
      height: 8px;
      & path {
      stroke: ${({ variant }) =>
        variant === 'primary' ? white : '#626262'};
      fill: ${({ variant }) =>
        variant === 'primary' ? white : '#626262'};
    }
  }
`

function getButtonProps(variant: ButtonVariant, loading?: boolean) {
  const props = {
    backgroundColor: white,
    color: black,
    border: 'none',
  }

  switch (variant) {
    case 'primary':
      props['backgroundColor'] = loading
        ? 'rgba(244, 131, 34, 0.6)'
        : black
      props['color'] = white
      props['border'] = 'none'
      break
    case 'secondary':
      props['backgroundColor'] = loading ? grey : white
      props['color'] = secondary02
      props['border'] = `1px solid ${grey}`
      break
    default:
      return props
  }
  return props
}

export const ButtonIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`
