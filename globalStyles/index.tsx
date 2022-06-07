import { css } from '@emotion/react'
import { theme } from '../utils/theme'
import { fontSizes, lineHeight } from '../utils/units'

export const GlobalStyles = css`
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;800&family=Poppins:wght@400;600&display=swap');

    * {
        box-sizing: border-box;
    }

    html,
    body {
        margin: 0;
        height: 100%;
        font-family: ${theme.typography.fontFamilyPoppins};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    h1, h2, h3, h4, h5 {
        font-family: ${theme.typography.fontFamilyManrope};
        font-weight: 800;
        margin: 0;
    }

    h1 {
        font-size: ${fontSizes.large};
        line-height: ${lineHeight.large};
        @media (min-width: ${theme.breakpoints.large}) {
            font-size: ${fontSizes.xxlarge};
            line-height: ${lineHeight.xxlarge};
        }
    }

    h2 {
        font-size: ${fontSizes.medium};
        line-height: ${lineHeight.medium};
        @media (min-width: ${theme.breakpoints.large}) {
            font-size: ${fontSizes.xlarge};
            line-height: ${lineHeight.xlarge};
        }
    }

    h3 {
        font-size: ${fontSizes.medium};
        line-height: ${lineHeight.medium};
        @media (min-width: ${theme.breakpoints.large}) {
            font-size: ${fontSizes.large};
            line-height: ${lineHeight.large};
        }
    }

    h5 {
        font-size: ${fontSizes.xsmall};
        line-height: ${lineHeight.xsmall};
        @media (min-width: ${theme.breakpoints.large}) {
            font-size: ${fontSizes.medium};
            line-height: ${lineHeight.medium};
        }
    }

    p {
        font-size: ${fontSizes.xsmall};
        line-height: ${lineHeight.xsmall};
        @media (min-width: ${theme.breakpoints.large}) {
            font-size: ${fontSizes.medium};
            line-height: ${lineHeight.medium};
        }
    }

    .errorMessage {
        font-size: ${fontSizes.xxsmall};
    }

    .header-logo {
        border-radius: 50%;
    }
`