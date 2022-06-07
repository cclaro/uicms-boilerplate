import styled from '@emotion/styled';
import { spacing } from '../../utils/units'

export interface ContainerProps {
    children?: React.ReactNode
}

export const ContainerWrapper = styled.div`
	color: inherit;
    margin: 0 auto;
    max-width: 1184px;
    padding: 0 ${spacing.large};
    text-align: left;
`
