import styled from '@emotion/styled'
import React from 'react'
import { theme } from '../../utils/theme'

export type BlockBGType = 'bgGray50' | 'white'

export interface BlockProps {
    children: React.ReactNode
    backgroundType?: BlockBGType
}

export const BlockWrapper = styled('div')<BlockProps>`
    position: relative;
    ${({ backgroundType }) => {
        if (backgroundType == 'bgGray50') {
			return`
                background-color: ${theme.palette.common.bgGray50};
			`;
		} 
        if (backgroundType == 'white') {
			return`
                background-color: ${theme.palette.common.white};
			`;
		}
    }}
`