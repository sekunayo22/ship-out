import styled from "@emotion/styled";
import { ClashDisplay } from "../../../styles/abstracts/colors";

export const CustomLegendContainer = styled.div`
display: flex;
gap: 24px;
justify-content: center;
align-items: center;
padding: 8px 0 0;
font-size: 12px;
color: #475467;
`

export const CustomLegendItem = styled.div`
display: flex;
align-items: center;
gap: 8px;
font-family: ${ClashDisplay};
`

export const CustomLegendDot = styled.div<{ color?: string }>`
width: 32.968px;
height: 16px;
border-radius: 4px;
display: inline-block;
background-color: ${({ color }) => color ?? '#000' };
`