import { type Control, useController, type FieldValues, type Path } from 'react-hook-form'
import { InputError, InputLabel, InputWrapper } from './styles'
import { InputContainer, StyledInput } from './styles'
import { css } from '@emotion/css'
import { red01 } from '../../styles/abstracts/colors'

interface InputProps<T extends FieldValues = FieldValues> {
  label?: string
  name: Path<T>
  placeholder?: string
  required?: boolean
  disabled?: boolean
  type: 'text' | 'email' | 'number' | 'password' | 'search' | 'url' | 'color'
  className?: string
  control: Control<T>
  min?: string
  autoFocus?: boolean
  autoComplete?: string
  onChange?: () => void
}

const Input = <T extends FieldValues>({
  label,
  name,
  placeholder,
  required,
  type,
  disabled,
  className,
  control,
  min,
  autoFocus,
  autoComplete,
  onChange,
}: InputProps<T>) => {
  const { field, fieldState } = useController({ control, name })
  const { error } = fieldState

  const isSuccess = Boolean(field.value && !error)
  const isError = Boolean(error)

  const getAutoCompleteValue = () => {
    if (autoComplete) return autoComplete

    const autoCompleteMap: Record<string, string> = {
      email: 'email',
      username: 'username',
      password: 'current-password',
      confirmPassword: 'new-password',
      firstName: 'given-name',
      lastName: 'family-name',
      phone: 'tel',
      phoneNumber: 'tel',
      address: 'street-address',
      city: 'address-level2',
      state: 'address-level1',
      zipCode: 'postal-code',
      country: 'country-name',
    }

    return autoCompleteMap[name as string] || 'off'
  }

  return (
    <div style={{ width: '100%' }}>
      {label && (
        <InputLabel htmlFor={name}>
          {label}
          {required && <span style={{ color: red01 }}> *</span>}
        </InputLabel>
      )}
      <InputWrapper>
        <InputContainer
          className={css(className)}
          isError={isError}
          isSuccess={isSuccess}
          isDisabled={disabled}
        >
          <StyledInput
            id={name}
            type={type}
            readOnly={disabled}
            placeholder={placeholder}
            {...field}
            value={field.value}
            onChange={e => {
              field.onChange(e)
              onChange?.()
            }}
            min={min}
            autoFocus={autoFocus}
            autoComplete={getAutoCompleteValue()}
            data-form-type='other'
            data-lpignore={type === 'password' ? 'true' : undefined}
            spellCheck='false'
            disabled={disabled}
          />
        </InputContainer>
        {error && <InputError>{error?.message}</InputError>}
      </InputWrapper>
    </div>
  )
}

export default Input
