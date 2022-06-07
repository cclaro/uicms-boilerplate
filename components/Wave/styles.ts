import styled from '@emotion/styled';
import { pxToRem } from '../../utils/remUtil';
import { theme } from '../../utils/theme'

export type WaveBGType = 'bgGray50' | 'white'
export interface WaveProps {
    inverted?: boolean
    backgroundType?: WaveBGType
}

export const WaveWrapper = styled('div')<WaveProps>`
	height: ${pxToRem(72)};
    inset: 0;
    position: relative;
    width: 100%;
    ${({ backgroundType }) => {
        if (backgroundType == 'bgGray50') {
			return`
                background: ${theme.palette.common.bgGray50};
			`;
		} 
        if (backgroundType == 'white') {
			return`
                background: ${theme.palette.common.white};
			`;
		}
    }}
    ${({ inverted }) => {
        if (inverted) {
			return`
                transform: rotate(180deg) scaleX(-1);
			`;
		} 
    }}
`