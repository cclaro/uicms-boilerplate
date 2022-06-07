import styled from '@emotion/styled'
import { theme } from '../../utils/theme'
import { spacing, fontSizes } from '../../utils/units'

export interface HeaderNavigationProps {
    key?: string;
    slug: string;
    text: string;
}

export const HeaderNavigationLink = styled.a`
    color: ${theme.palette.common.bgGray500};
    font-size: ${fontSizes.small};
    font-family: ${theme.typography.fontFamilyManrope};
    font-weight: 700;
    padding: ${spacing.xsmall} ${fontSizes.xsmall};
    text-decoration: none;
    cursor: pointer;
    
    &:hover {
        background-color: ${theme.palette.common.bgGray400};
        border-radius: ${theme.shape.borderRadius};
    }
`