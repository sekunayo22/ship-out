import styled from "@emotion/styled"
import { ClashDisplay, white, primary02, grey } from "../../../styles/abstracts/colors"

export const CreateNewVesselContainer = styled.div`
    flex-direction: column;
    gap: 27px;
    border-radius: 4px;
    background: ${white};
    width: 514px;
    padding-bottom: 24px;
`

export const FormHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px  26px;
    height: 62px;
    border-bottom: 0.8px solid ${grey};
`

export const FormHeaderTitle = styled.h1`
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

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px 26px 23px 26px;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 0 26px;
`

export const FormGroup = styled.div`
    display: flex;
    gap: 16px;
    width: 100%;
`