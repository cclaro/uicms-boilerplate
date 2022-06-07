import styled from '@emotion/styled'
import { theme } from '../../../utils/theme'
import { spacing } from '../../../utils/units'
import { ButtonLinkProps } from '../../ButtonLink/styles'

export interface ImageContentProps {
    title: string
    subtitle: string
    buttonLink: ButtonLinkProps
    inverted?: boolean
    image: string
}

export const ImageContentWrapper = styled.div`
    padding: ${spacing.medium} 0;
    color: ${theme.palette.common.bgGray500};
    @media (min-width: ${theme.breakpoints.large}) {
        padding: ${spacing.xlarge} 0;
    }
`

export const ImageContentText = styled.div`
    width: 100%;
    @media (min-width: ${theme.breakpoints.large}) {
        max-width: 480px;
    }
`

export const ImageContentThumb = styled.img`
    width: 100%;
    border-radius: ${theme.shape.borderRadius};
    margin-left: auto;
    margin-bottom: ${spacing.medium};
    @media (min-width: ${theme.breakpoints.large}) {
        max-width: 544px;
    }
`

export const ImageContentInner = styled('div')<Pick<ImageContentProps, "inverted">>`
    display: flex;
    flex-direction: column;

    ${ImageContentText} {
        order: 2;
    }

    @media (min-width: ${theme.breakpoints.large}) {
        flex-direction: row;
        ${ImageContentText} {
            order: inherit;
        }
    }

    ${({ inverted }) => {
        if (inverted) {
			return`
                ${ImageContentText} {
                    order: 2;
                }
                ${ImageContentThumb} {
                    margin-right: auto;
                    margin-left: 0;
                }
			`;
		} 
    }}
`