import styled from '@emotion/styled'
import { theme } from '../../utils/theme'
import { spacing, fontSizes } from '../../utils/units'

export interface HeaderLoginItemProps {
    id: string
    title: string
    slug: string
}

export interface HeaderLoginProps {
    navigation: HeaderLoginItemProps[]
}

export const HeaderLoginWrapper = styled.div`
    display: flex;
    align-items: center;
    flex: 1 0 0;
    justify-content: flex-end;
`

export const HeaderLoginLink = styled.a`
    color: ${theme.palette.common.bgGray500};
    font-size: ${fontSizes.small};
    font-family: ${theme.typography.fontFamilyManrope};
    font-weight: 700;
    padding: ${spacing.xsmall} ${spacing.gap};
    margin: ${spacing.xsmall} ${spacing.small};
    cursor: pointer;
    text-decoration: none;
    @media (max-width: ${theme.breakpoints.large}) {
        display: none;
    }

    &:hover {
        background-color: ${theme.palette.common.bgGray400};
        border-radius: ${theme.shape.borderRadius};
    }
`

export const HeaderLoginMenu = styled.div`
    @media (max-width: ${theme.breakpoints.large}) {
        position: relative;
        z-index: 10;
    }
`

export const HeaderLoginMobileNav = styled.nav`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    background-color: ${theme.palette.common.white};
    padding: ${spacing.xxlarge} 0;
`

export const HeaderLoginMobileNavUl = styled.ul`
    padding: ${spacing.xsmall} ${spacing.large};
    list-style-type: none;
`

export const HeaderLoginMobileNavLi = styled.ul`
    padding: ${spacing.small} 0;
    font-size: ${fontSizes.medium};
    border-bottom: 2px solid ${theme.palette.common.bgGray300};
    a {
        text-decoration: none;
    }
`