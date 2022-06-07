import styled from '@emotion/styled'
import { theme } from '../../utils/theme'
import { spacing, fontSizes } from '../../utils/units'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string
    name: string
    label: string
    type: string
    placeholder: string
    error?: boolean
    errorMessage?: string
}

export const InputWrapper = styled.div`
    font-size: ${fontSizes.small};
    color: ${theme.palette.common.bgGray500};
    margin: ${spacing.large} 0 0;
`

export const Inputlabel = styled.label`
    font-weight: 600;
    display: inline-block;
    width: 100%;
`

export const InputField = styled.input`
    font-weight: 500;
    width: 100%;
    font-family: ${theme.typography.fontFamilyManrope};
    font-size: ${fontSizes.small};
    color: ${theme.palette.common.bgGray500};
    border: none;
    padding: ${spacing.small} ${spacing.medium};
    background: ${theme.palette.common.white};
    border: 1px solid rgba(25, 0, 65, 0.08);
    box-shadow: 0px 4px 4px rgba(25, 0, 65, 0.04);
    border-radius: ${theme.shape.borderRadiusXsmall};
    margin: ${spacing.small} 0 0;
    &::placeHolder {
        color: ${theme.palette.common.bgGray500};
    }
`