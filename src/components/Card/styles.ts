import styled from "@emotion/styled";
import { ClashDisplay } from "../../styles/abstracts/colors";
import { black, white } from "../../styles/abstracts/colors";
export const CardContainer = styled.div`
  border-radius: 8px;
  padding: 16px;
border: 0.6px solid  #343B4F;
background-color: ${black};
display: flex;
flex-direction: column;
gap: 16px;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & svg{
    transform: rotate(90deg);
    fill: ${white};
    & path {
      stroke: ${white};
    }
  }
`

export const CardTitle = styled.h2`
  color: rgba(255, 255, 255, 0.50);
  font-family: ${ClashDisplay};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

`

export const CardOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const CardDescription = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${white};
font-feature-settings: 'liga' off, 'clig' off;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 32px; 
`;