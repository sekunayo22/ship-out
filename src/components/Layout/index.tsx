import React from 'react'
import Sidebar from '../Sidebar'
import {
  MainContent,
  MainContentContainer,
  LayoutContainer,
} from './styles'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({
  children,
}) => {

  return (
    <LayoutContainer>
      <Sidebar />
      <MainContent>
        <MainContentContainer>
          {children}
        </MainContentContainer>
      </MainContent>
    </LayoutContainer>
  )
}

export default Layout
