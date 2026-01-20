import styled from '@emotion/styled'
import { ClashDisplay, primary01, secondary01 } from '../../styles/abstracts/colors'

export const VesselsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`

export const MainHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const MainHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MainHeaderTitle = styled.h1`
  color: ${primary01};
  font-family: ${ClashDisplay};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
`

export const MainHeaderDescription = styled.p`
  color: ${secondary01} ;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`

export const TableSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`