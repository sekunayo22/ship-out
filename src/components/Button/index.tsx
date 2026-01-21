import Icon from '../Icon'
import type { IconNames } from '../../assets/icons/iconTypes'

import { ButtonIcon, StyledButton } from './styles'
import { css } from '@emotion/css'
import type { ButtonIconPosition, ButtonSize, ButtonType, ButtonVariant } from '../../types/component'
import type { ReactNode } from 'react'



interface ButtonProps {
  label?: string
  iconName?: IconNames
  variant: ButtonVariant
  type: ButtonType
  iconPosition?: ButtonIconPosition
  size?: ButtonSize
  buttonStyles?: React.CSSProperties
  disabled?: boolean
  loading?: boolean
  handleClick?: () => void
  className?: string
  children?: ReactNode | string
}

const Button = ({
  label,
  iconName,
  variant = 'primary',
  type = 'button',
  iconPosition,
  size = 'medium',
  handleClick,
  className,
  loading,
  children,
  disabled,
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      role='button'
      type={type}
      className={css(className)}
      onClick={e => {
        e.stopPropagation()
        handleClick?.()
      }}
      iconPosition={iconPosition}
      loading={loading}
      disabled={disabled}
    >
      {iconName && (
        <ButtonIcon>
          <Icon icon={iconName} />
        </ButtonIcon>
      )}
      {label || children}
    </StyledButton>
  )
}

export default Button
