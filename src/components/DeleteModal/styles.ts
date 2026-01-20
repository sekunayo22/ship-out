import styled from "@emotion/styled"
import { ClashDisplay, white, primary02, grey } from "../../styles/abstracts/colors"

export const DeleteModalContainer = styled.div`
    flex-direction: column;
    gap: 27px;
    border-radius: 4px;
    background: ${white};
    width: 514px;
    padding-bottom: 24px;
`

export const DeleteModalHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0px  26px;
    height: 62px;
`

export const DeleteModalTitle = styled.h1`
    font-family: ${ClashDisplay};
    color: ${primary02};
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
`

export const CloseButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 100%;
    cursor: pointer;
`

export const DeleteModalContent = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 16px 26px 23px 26px;
    align-items: center;
`

export const DeleteModalDescription = styled.p`
    color: #5E5E5E;
    text-align: center;
    font-family: Archivo;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
`

export const DeleteModalIcon = styled.div`
    display: flex;
    width: 94px;
    height: 94px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background: #F6D7DF;
`

export const DeleteModalButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    padding: 26px 26px 0px 26px;
    border-top:1px solid ${grey};
`