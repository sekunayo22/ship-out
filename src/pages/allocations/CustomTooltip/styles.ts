import styled from "@emotion/styled";
import { white } from "../../../styles/abstracts/colors";

export const CustomTooltipContainer = styled.div`
  background-color: #292D30;
  border-radius: 35px;
  width: fit-content;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px 18px;
`

export const CustomTooltipLabel = styled.p`
  color: ${white};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`