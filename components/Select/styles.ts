import styled from '@emotion/styled'
import { theme } from '../../utils/theme'
import { spacing, fontSizes } from '../../utils/units'

export interface SelectItemProps {
    id: string
    content: string
}

export interface SelectProps {
    id: string
    name: string
    value: SelectItemProps[]
    error?: boolean
    errorMessage?: string
}

export const SelectWrapper = styled.div`
    font-size: ${fontSizes.small};
    color: ${theme.palette.common.bgGray500};
`

export const Selectlabel = styled.label`
    font-weight: 600;
    display: inline-block;
    width: 100%;
    margin: 0 0 ${spacing.small};
`

export const SelectSelect = styled.select`
    font-weight: 500;
    width: 100%;
    font-family: ${theme.typography.fontFamilyManrope};
    font-size: ${fontSizes.small};
    color: ${theme.palette.common.bgGray500};
    border: none;
    padding: ${spacing.small} ${spacing.medium};
    border: 1px solid rgba(25, 0, 65, 0.08);
    box-shadow: 0px 4px 4px rgba(25, 0, 65, 0.04);
    border-radius: ${theme.shape.borderRadiusXsmall};
    appearance: none;
    position: relative;
    background: ${theme.palette.common.white} url('./chevron-down.svg');
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: calc(100% - 11px) center;
`

export const SelectOption = styled.option`
    font-weight: 800;
    width: 100%;
`