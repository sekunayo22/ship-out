import styled from '@emotion/styled'
import {
  red01,
  primary02,
  black,
  green01,
  grey02
} from '../../styles/abstracts/colors'

export const InputLabel = styled.label`
  margin-bottom: 4.878px;
  font-weight: 400;
  font-size: 13.659px;
  line-height: normal;
  letter-spacing: 0.546px;
  color: ${primary02};
`

export const InputWrapper = styled.div`
  width: 100%;
`

export const InputContainer = styled.div<{
  isSuccess?: boolean
  isError?: boolean
  isDisabled?: boolean
}>`
  transition: all 0.3s ease-in-out;
  width: 100%;
  display: flex;
  padding: 11.707px 15.61px;
  align-items: center;
  background-color: ${({ isDisabled }) => (isDisabled ? '#e3e3e4' : "#f2f2f2")};
  border: ${({ isError }) =>
    isError ? `1px solid ${red01}` : "none"};
  &:focus {
    border: 1px solid ${black};
  }
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'none')};
  border-radius: 7.805px;
`

export const InputError = styled.div`
  font-size: 12px;
  color: ${red01};
`

export const InputSuccess = styled.div`
  font-size: 12px;
  color: ${green01};
`

export const InputPlaceholder = styled.div`
  font-size: 12px;
  color: ${grey02};
`

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  background-color: initial;
  font-size: 12px;
  &::placeholder {
    font-size: 12px;
    color: ${grey02};
  }
`
