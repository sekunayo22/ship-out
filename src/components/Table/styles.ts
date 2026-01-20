import styled from '@emotion/styled'
import { black, primary01, secondary01 } from '../../styles/abstracts/colors'

export const TableContainer = styled.div`
  width: 100%;
  flex: 1;
  min-height: 0;
  overflow-x: auto;
  overflow-y: hidden;
  border-radius: 8px;
`

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  border: none;
`

export const HeaderCell = styled.th`
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 500;
  background-color: #FCFCFD;
  color: ${secondary01};
  line-height: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
`

export const HeaderRow = styled.tr`
  background-color: #FCFCFD;
`

export const HeaderGroup = styled.thead`
  width: 100%;
  background-color: #FCFCFD;
  border-bottom: 1px solid #EAECF0;
`

export const TableBody = styled.tbody`
  width: 100%;
`

export const TableRow = styled.tr`
  border-bottom: 1px solid #EAECF0;
`

export const TableCell = styled.td<{ columnHeader?: any, isSelected?: boolean }>`
  padding: 8px 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: middle;
  color: ${({ isSelected }) => isSelected ? black : secondary01};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  overflow: ${({ columnHeader }) =>
    columnHeader === 'Actions' ||
    columnHeader === 'Role' ||
    columnHeader === 'Options'
      ? 'visible'
      : 'hidden'};
`

export const OptionsCell = styled(TableCell)`
  max-width: 120px;
  white-space: nowrap;
  overflow: hidden;

  & > div {
    display: flex;
    align-items: center;
    gap: 4px;
    overflow: hidden;
  }

  & a,
  & button {
    white-space: nowrap;
    overflow: hidden;
    max-width: 100%;
  }
`

export const TableFooter = styled.div`
  width: 100%;
`

export const FooterCell = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: ${primary01};
  white-space: nowrap;
`

export const MainTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  min-height: 0;
`

export const ButtonActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const TableFooterRow = styled.div`
  width: 100%;
  padding: 16px 16px 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
