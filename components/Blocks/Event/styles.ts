import styled from '@emotion/styled'
import { theme } from '../../../utils/theme'
import { spacing, fontSizes } from '../../../utils/units'

export interface EventItemProps {
    title: string
    content: string
    thumb: string
}

export interface EventProps {
    title: string
    subtitle: string
    events: EventItemProps[]
}

export const EventsWrapper = styled.div`
    text-align: center;
    padding: ${spacing.xlarge} 0;
    color: ${theme.palette.common.bgGray500};
    @media (min-width: ${theme.breakpoints.large}) {
        padding: ${spacing.xxlarge} 0;
    }
`

export const EventsHeader = styled.div``

export const EventsHeaderSubtitle = styled.p`
    margin: ${spacing.medium} auto;
    max-width: 736px;
`

export const EventsItems = styled.div`
    display: block;
    grid-template-columns: repeat(auto-fit, minmax(352px, 1fr));
    grid-gap: 32px;
    position: relative;
    padding: ${spacing.large} 0;
    @media (min-width: ${theme.breakpoints.large}) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(352px, 1fr));
    }
`

export const EventsItem = styled.a`
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    width: 100%;
    margin: ${spacing.large} 0;
    @media (min-width: ${theme.breakpoints.large}) {
        margin: 0;
    }
`

export const EventsItemThumb = styled.div`
    position: relative;
    width: 100%;
    height: 220px;
    object-fit: cover;
    margin: 0 0 ${spacing.small};
    @media (min-width: ${theme.breakpoints.large}) {
        margin: 0 0 ${spacing.medium};
    }
    > span {
        border-radius: ${theme.shape.borderRadius};
    }
`

export const EventsItemContent = styled.span`
    font-size: ${fontSizes.xxsmall};
    @media (min-width: ${theme.breakpoints.large}) {
        margin: ${spacing.small} 0;
    }
`