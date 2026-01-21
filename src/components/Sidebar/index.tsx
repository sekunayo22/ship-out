import Icon from '../Icon'
import {
  AppIcon,
  AppIconText,
  SidebarHeader,
  SidebarNav,
  SidebarNavItem,
  SidebarNavItemLink,
  StyledSidebar,
} from './styles'
import { routes } from '../../constants/routes'


export const Sidebar = () => {
  return (
    <StyledSidebar
    >
      <SidebarHeader>
        <AppIcon>
          <Icon icon={'logo'} />
          <AppIconText>SHIP OUT</AppIconText>
        </AppIcon>
      </SidebarHeader>
      <SidebarNav>
        {routes?.map((route, index) => {
          return (
            <SidebarNavItem key={index + 1}>
              <SidebarNavItemLink
                to={route.href}
                end={route.href === '/'}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {route.label}
              </SidebarNavItemLink>
            </SidebarNavItem>
          )
        })}
      </SidebarNav>
    </StyledSidebar>
  )
}

export default Sidebar
