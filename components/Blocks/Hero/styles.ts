import styled from '@emotion/styled'
import { theme } from '../../../utils/theme'
import { ButtonLinkProps } from '../../ButtonLink/styles'
import { spacing } from '../../../utils/units'

export interface HeroProps {
    title: string
    subtitle: string
    image: string
    buttonLink: ButtonLinkProps
    align?: 'default' | 'center' | 'inverse'
}

export const HeroContent = styled.div`
    width: 100%;
    @media (min-width: ${theme.breakpoints.large}) {
        max-width: 544px;
        padding: 0 ${spacing.xlarge} 0 0;
    }
`
export const HeroThumb = styled.div`
    position: relative;
    width: 576px;
    height: 456px;
    object-fit: cover;
    @media (max-width: ${theme.breakpoints.large}) {
       display: none;
    }
    > span {
        border-radius: ${theme.shape.borderRadius};
    }
`

export const HeroWrapper = styled('div')<Pick<HeroProps, "align">>`
    display: flex;
    align-items: center;
    color: ${theme.palette.common.bgGray500};
    padding: ${spacing.large} 0;
    @media (min-width: ${theme.breakpoints.large}) {
        padding: ${spacing.xxlarge} 0;
    }

    ${({ align }) => {
        if (align == 'default') {
			return`
                flex-direction: row;
			`;
		} 
        if (align == 'inverse') {
			return`
                flex-direction: row-reverse;
                ${HeroContent}  {
                    @media (min-width: ${theme.breakpoints.large}) {
                        padding: 0 0 0 ${spacing.xlarge};
                    }
                }
			`;
		}
        if (align == 'center') {
			return`
                flex-direction: column;

                ${HeroContent}  {
                    text-align: center;
                    @media (min-width: ${theme.breakpoints.large}) {
                        max-width: 600px;
                        padding: 0;
                        margin: 0 0 ${spacing.xlarge} 0;
                    }
                }

                ${HeroThumb} {
                    width: 1000px;
                    height: 600px;
                }
			`;
		}
    }}
`