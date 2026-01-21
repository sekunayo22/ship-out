import styled from "@emotion/styled";
import { black, ClashDisplay } from "../../styles/abstracts/colors";
export const ComponentLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

export const LoaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  animation: scale 1.5s infinite;

  & svg path {
    fill: ${black};
  }

  @keyframes scale {
    0% {
      opacity: 0;
      scale: 0.5;
    }
    50% {
      opacity: 0.5;
      scale: 1;
    }
    100% {
      opacity: 1;
      scale: 1.5;
    }
  }
`;

export const LoaderText = styled.p`
  color: ${black};
font-size: 16px;
font-style: normal;
font-weight: 600;
letter-spacing: -0.16px;
text-transform: uppercase;
font-family: ${ClashDisplay};
`;          