import styled from '@emotion/styled'
import { black, ClashDisplay, primary01, secondary01 } from '../../styles/abstracts/colors'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  padding-right: 24px;
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
  border-radius: 8px;
  border: 1px solid #EAECF0;
  height: 100%;

  & table {
    border-collapse: separate !important;
    border-spacing: 0 !important;
    border: none !important;
  }
`

export const TableSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  gap: 16px;
`

export const TableSectionContent = styled.div`
  display: grid; 
  grid-template-columns: 2fr 1fr;
  height: auto;
  padding-top: 48px;
`

export const DonutSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
`

export const DonutTitle = styled.h2`
  color: ${black};
  font-family: ${ClashDisplay};
text-align: center;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`

export const TableSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & svg path { 
    fill: none;
    stroke: ${black};
  }
`
export const TableSectionHeaderTitle = styled.h2`
  color: ${black};
font-family: ${ClashDisplay};
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 20px; 
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 48px;  
`