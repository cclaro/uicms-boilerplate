import styled from '@emotion/styled'
import { theme } from '../../utils/theme'
import { spacing, fontSizes } from '../../utils/units'

export type ButtonLinkType = 'bgGray500' | 'bgGray500Outline'

export interface ButtonLinkProps {
    slug: string
    text: string
    buttonType?: ButtonLinkType
    hideDesktop?: boolean
    hideMobile?: boolean
    asButton?: boolean
    onClick?: () => void
}

export const ButtonLinkWrapper = styled('a')<Pick<ButtonLinkProps, "buttonType" | "hideDesktop" | "hideMobile">>`
    border-radius: ${theme.shape.borderRadius};
    text-decoration: none;
    border: none;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    flex-shrink: 0;
    font-size: ${fontSizes.small};
    font-weight: 600;
    padding: ${spacing.xsmall} ${spacing.gap};
    ${({ hideDesktop }) => {
        if (hideDesktop) {
			return`
                display: block;
                @media (min-width: ${theme.breakpoints.large}) {
                    display: none;
                }
			`;
		} 
    }}
    ${({ hideMobile }) => {
        if (hideMobile) {
			return`
                display: block;
                @media (max-width: ${theme.breakpoints.large}) {
                    display: none;
                }
			`;
		} 
    }}
    ${({ buttonType }) => {
        if (buttonType == 'bgGray500') {
			return`
                background-color: ${theme.palette.common.bgGray500};
                color: ${theme.palette.common.white};

                &:hover {
                    background-color: ${theme.palette.common.bgGray300};
                }
			`;
		} 
        if (buttonType == 'bgGray500Outline') {
			return`
                background-color: transparent;
                color: ${theme.palette.common.bgGray500};
                box-shadow: ${theme.palette.common.bgGray300} 0px 0px 0px 2px inset;
			`;
		}
    }}
`

export const ButtonLinkWrapperButton = styled('button')<Pick<ButtonLinkProps, "buttonType">>`
    border-radius: ${theme.shape.borderRadius};
    font-family: ${theme.typography.fontFamilyManrope};
    text-decoration: none;
    border: none;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    flex-shrink: 0;
    font-size: ${fontSizes.small};
    font-weight: 600;
    padding: ${spacing.xsmall} ${spacing.gap};
    margin: ${spacing.xlarge} 0;

    ${({ buttonType }) => {
        if (buttonType == 'bgGray500') {
			return`
                background-color: ${theme.palette.common.bgGray500};
                color: ${theme.palette.common.white};

                &:hover {
                    background-color: ${theme.palette.common.bgGray300};
                }
			`;
		} 
        if (buttonType == 'bgGray500Outline') {
			return`
                background-color: transparent;
                color: ${theme.palette.common.bgGray500};
                box-shadow: ${theme.palette.common.bgGray300} 0px 0px 0px 2px inset;
			`;
		}
    }}
`