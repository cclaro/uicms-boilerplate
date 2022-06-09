import styled from '@emotion/styled';
import { theme } from '../../utils/theme'
import { spacing, fontSizes } from '../../utils/units'

export type LinkBgColor =
	| 'bgGray500'
	| 'bgGray50'
;

export interface HiringLinkProps {
    slug: string
    text: string
    backgroundColor?: LinkBgColor 
}

export const HiringWrapper = styled('a')<Pick<HiringLinkProps, "backgroundColor">>`
    margin: 0 ${spacing.medium};
    font-family: ${theme.typography.fontFamilyPoppins};
    font-weight: 600;
    font-size: ${fontSizes.xxsmall};
    padding: ${spacing.xxsmall} ${spacing.small};
    border-radius: ${theme.shape.borderRadius};
    cursor: pointer;
    text-decoration: none;
    
    @media (max-width: ${theme.breakpoints.large}) {
        display: none;
    }

    ${({ backgroundColor }) => {
        if (backgroundColor == 'bgGray500') {
			return`
                background-color: ${theme.palette.common.bgGray500};
                color: ${theme.palette.common.white};
			`;
		} else {
			return`
                background-color: ${theme.palette.common.bgGray300};
                color: ${theme.palette.common.bgGray500};

                &:hover {
                    background-color: ${theme.palette.common.bgGray400};
                }
			`;
		}
    }}
`