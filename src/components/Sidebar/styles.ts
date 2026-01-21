import styled from '@emotion/styled'
import {
  white,
  black,
  primary01,
  ClashDisplay,
} from '../../styles/abstracts/colors'    
import { NavLink } from 'react-router-dom'

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const StyledSidebar = styled.div`
  position: relative;
  z-index: 1;
  height: 100vh;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  width: 232px;
  max-width: 232px;
  padding: 24px 16px 32px 16px;
  gap: 24px;
  border-right: 1px solid rgba(221, 221, 221, 0.87);
`

export const AppIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  & svg {
     width: 37px;
     height: 37px;
     fill: ${black};
     & path {
      fill: ${black};
     }
  }
`

export const AppIconText = styled.span`
  color: ${primary01};
  font-family: ${ClashDisplay};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.14px;
  text-transform: uppercase;
`

export const SidebarNav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 32px;
  width: 100%;
`

export const SidebarNavItemLink = styled(NavLink)`
  color: ${primary01};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.14px;
  text-transform: capitalize;
  padding: 0px 10px;
  transition: background-color ease 0.2s;
  padding: 12px;
  width: 100%;
  white-space: nowrap;
  display: flex;
  border-radius: 8px;

  &.active {
    background-color: ${black};
    color: ${white};
    text-decoration: none;
  }

  &:hover {
    background-color: ${black};
    color: ${white};
    text-decoration: none;
  }
`

export const SidebarNavItem = styled.li<{
  hide?: boolean
}>`
  width: 100%;
`