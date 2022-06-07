import styled from '@emotion/styled';
import { theme } from '../../utils/theme'
import { spacing, fontSizes, lineHeight } from '../../utils/units'
import { pxToRem } from '../../utils/remUtil';

export interface FooterItemsProps {
    id: string;
    title: string;
    slug: string;
}
export interface FooterColumnProps {
    id: string;
    title: string;
    items: FooterItemsProps[]
}

export interface FooterProps {
    footer: FooterColumnProps[]
}

export const FooterWrapper = styled.div`
	display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${spacing.small};
    padding: calc(100px + ${spacing.small}) 0;
    color: ${theme.palette.common.bgGray500};
    font-family: ${theme.typography.fontFamilyManrope};
    font-weight: 800;
    @media (min-width: ${theme.breakpoints.large}) {
        grid-template-columns: repeat(6, 1fr);
        gap: ${spacing.large};
    }
`

export const FooterColHeadingWrapper = styled.div`
    text-align: left;
    margin: 0 0 ${spacing.large};

    @media (max-width: ${theme.breakpoints.large}) {
    }
`

export const FooterColHeading = styled.div`
	font-size: ${fontSizes.xsmall};
    line-height: ${lineHeight.small};
    margin: 0 0 ${spacing.xsmall};
    @media (max-width: ${theme.breakpoints.large}) {
    }
`

export const FooterColHeadingHR = styled.hr`
    width: ${pxToRem(94)};
    height: ${pxToRem(2)};
    border: 0;
    background-color: ${theme.palette.common.bgGray500};
    margin: 0;
`

export const FooterCol = styled.div`
	display: flex;
    align-self: flex-start;
    flex-direction: column;
    padding 0 0 ${spacing.large} 0:
`

export const FooterColLInk = styled.a`
	display: block;
    align-items: center;
    flex-shrink: 0;
    margin: 0 0 ${spacing.small};
    cursor: pointer;
    text-decoration: none;
    color: ${theme.palette.common.bgGray500};
    &:hover {
        text-decoration: underline;
    }
`
