import styled from '@emotion/styled'
import { theme } from '../../../utils/theme'
import { spacing } from '../../../utils/units'
import { SelectItemProps } from '../../Select/styles'

export interface ContactFormInput {
    _id: string
    name: string
    email: string
    options: SelectItemProps[]
  }
  

export const ContactFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: ${theme.palette.common.bgGray500};
    padding: ${spacing.xlarge} 0 0;
    @media (min-width: ${theme.breakpoints.large}) {
        padding: ${spacing.xxlarge} 0;
        flex-direction: row;
    }
`

export const ContactFormContent = styled.div`
    width: 100%;
    @media (min-width: ${theme.breakpoints.large}) {
        max-width: 544px;
    }
`

export const ContactFormBlock = styled.div`
    width: 100%;
`