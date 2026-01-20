import styled from "@emotion/styled"
import { ClashDisplay, white, primary02, grey, black } from "../../styles/abstracts/colors"

export const ViewModalContainer = styled.div`
    flex-direction: column;
    gap: 27px;
    border-radius: 4px;
    background: ${white};
    width: 514px;
    padding-bottom: 24px;
`

export const ViewModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px  26px;
    height: 62px;
    border-bottom: 0.8px solid ${grey};
`

export const ViewModalTitle = styled.h1`
    color: ${primary02};
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 14.239px;
    font-family: ${ClashDisplay};

`

export const CloseButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 100%;
    cursor: pointer;
`

export const ViewModalContent = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px 26px 23px 26px;
`

export const ViewModalItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ViewModalItemKey = styled.span`
    color: ${black};
    font-size: 13.66px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0.546px;
    text-transform: capitalize;
`
export const ViewModalItemValue = styled.span`
    color: ${black};
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; 
`