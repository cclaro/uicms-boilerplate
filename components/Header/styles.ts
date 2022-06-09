import styled from '@emotion/styled'
import { theme } from '../../utils/theme'
import { spacing } from '../../utils/units'

export interface HeaderItemProps {
    id: string
    title: string
    slug: string
}

export interface HeaderProps {
    navigation: HeaderItemProps[]
}

export const HeaderWrapper = styled.header`
    align-items: center;
    display: flex;
    width: 100%;
    justify-content: between;
    background-color: ${theme.palette.common.bgGray50};
    height: ${theme.headerHeight.height};
    padding: ${spacing.large};

    @media (max-width: ${theme.breakpoints.xsmall}) {
        padding: 0 ${spacing.xsmall};
    }
`

export const HeaderLogo = styled.div`
    align-items: center;
    display: flex;
    flex: 1 0 0;
    position: relative;
    z-index: 10;
`

export const HeaderNavigation = styled.div`
    align-items: center;
    display: flex;
    flex: 1 1 0;
    justify-content: center;
    height: 100%;

    @media (max-width: ${theme.breakpoints.large}) {
        display: none;
    }
`
