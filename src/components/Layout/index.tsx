import React from 'react'
import Sidebar from '../Sidebar'
import {
  MainContent,
  MainContentContainer,
  LayoutContainer,
} from './styles'
import { ComponentLoader } from '../ComponentLoader'

interface LayoutProps {
  children: React.ReactNode
  isLoading?: boolean
}

const Layout: React.FC<LayoutProps> = ({
  children,
  isLoading = false,
}) => {

  return (
    <LayoutContainer>
      <Sidebar />
      <MainContent>
        <MainContentContainer>
          {isLoading ? <ComponentLoader /> : children}
        </MainContentContainer>
      </MainContent>
    </LayoutContainer>
  )
}

export default Layout
