import React from 'react'
import { InputWrapper, Inputlabel, InputField, InputProps  } from './styles'

const Input = ({
    id,
    name,
    type,
    label,
    placeholder,
    error = false,
    errorMessage = '',
    ...props
  }: InputProps) => {
  return (
    <InputWrapper>
        <Inputlabel htmlFor={id}>
            {label}
        </Inputlabel>
        <InputField
            {...props}
            autoComplete="off"
            name={name}
            type={type}
            id={id}
            placeholder={placeholder}
        />
        {error && <span className="errorMessage">*{errorMessage}</span>}
    </InputWrapper>
  )
}

export default Input