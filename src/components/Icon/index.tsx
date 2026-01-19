import { icons } from '../../assets/icons/icons'
import type { IconNames } from '../../assets/icons/iconTypes'
import { StyledIcon } from './styles'
import { css, cx } from '@emotion/css'

interface IconProps {
  icon: IconNames
  className?: string
}

const iconClass = css({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
})

const Icon: React.FC<IconProps> = ({ icon, className }): React.ReactNode => {
  return (
    <StyledIcon
      aria-hidden={true}
      className={cx(iconClass, className)}
      icon={true}
      id='icon-element'
      dangerouslySetInnerHTML={{ __html: icons[icon] }}
    />
  )
}

export default Icon
