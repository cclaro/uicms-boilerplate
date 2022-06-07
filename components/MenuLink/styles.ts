import styled from '@emotion/styled'
import { theme } from '../../utils/theme'
import { spacing, fontSizes } from '../../utils/units'

export type ButtonLinkType = 'bgGray500' | 'bgGray500Outline'

export interface ButtonLinkProps {
    slug: string
    text: string
    buttonType?: ButtonLinkType
}

export const ButtonLinkWrapper = styled('a')<Pick<ButtonLinkProps, "buttonType">>`
    border-radius: ${theme.shape.borderRadius};
    text-decoration: none;
    border: none;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    flex-shrink: 0;
    font-size: ${fontSizes.small};
    font-weight: 600;
    padding: ${spacing.xsmall} ${spacing.small};
    ${({ buttonType }) => {
        if (buttonType == 'bgGray500') {
			return`
                background-color: ${theme.palette.common.bgGray500};
                color: ${theme.palette.common.white};

                &:hover {
                    background-color: ${theme.palette.common.purpleLight};
                }
			`;
		} 
        if (buttonType == 'bgGray500Outline') {
			return`
                background-color: transparent;
                color: ${theme.palette.common.bgGray500};
                box-shadow: ${theme.palette.common.bgGray500} 0px 0px 0px 2px inset;
			`;
		}
    }}
`