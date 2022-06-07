import React from 'react'
import { SelectWrapper, Selectlabel, SelectSelect, SelectOption, SelectProps } from './styles'
import { formatString } from '../../utils/formatString'

const Select = ({ name, value, error = false, errorMessage = '', ...props }: SelectProps ) => {
  return (
    <SelectWrapper>
        <Selectlabel>Type of event</Selectlabel>
        <SelectSelect {...props} name={name} id={name}>
            <SelectOption value="selectOne" selected>Select One</SelectOption>
            {value?.map((option, index) => (
                <SelectOption key={index} value={`${formatString(option.content)}`}>{option.content}</SelectOption>
            ))}
        </SelectSelect>
        {error && <span className="errorMessage">*{errorMessage}</span>}
    </SelectWrapper>
  )
}

export default Select