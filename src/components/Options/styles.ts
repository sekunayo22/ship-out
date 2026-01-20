import styled from "@emotion/styled"
import { grey, primary01, secondary01, white } from "../../styles/abstracts/colors"

export const OptionsMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  height: 100%;
  & svg {
    width: 16px;
    height: 16px;
    fill: ${grey};
  }
`

export const StyledOptionsDropdown = styled.div`
  position: relative;
  display: inline-block;
`

export const OptionsDropdownContent = styled.div`
  position: absolute;
  background-color: ${white};
  border: 1px solid ${grey};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 60;
  width: 152px;
  top: 100%;
  left: 0px;
  display: flex;
  flex-direction: column;
`

export const OptionsDropdownItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const OptionsDropdownItem = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 8px;
  text-align: left;
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.3%;
  vertical-align: middle;
  color: ${primary01};
  text-decoration: none !important;

  & svg {
    width: 16px;
    height: 16px;
    & path {
      stroke: ${primary01};
    }
  }

  &:hover {
    background-color: #f8f9fb;
  }

  &:last-child {
    border-top: 1px solid #E8EAF1;
  }
`

export const OptionsDropdownItemIcon = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const OptionsDropdownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const OptionsDropdownHeaderTitle = styled.span`
 color: ${secondary01};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.036px;
  `