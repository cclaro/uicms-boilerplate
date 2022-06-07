import { pxToRem } from './remUtil';

export const spacing = {
  none: 0,
  xxsmall: `${pxToRem(4)}`,
  xsmall: `${pxToRem(8)}`,
  small: `${pxToRem(12)}`,
  gap: `${pxToRem(16)}`,
  medium: `${pxToRem(20)}`,
  gutter: `${pxToRem(24)}`,
  large: `${pxToRem(32)}`,
  xlarge: `${pxToRem(48)}`,
  xxlarge: `${pxToRem(96)}`,
};

export const fontSizes = {
  xxsmall: `${pxToRem(12)}`,
  xsmall: `${pxToRem(16)}`,
  small: `${pxToRem(18)}`,
  medium: `${pxToRem(20)}`,
  large: `${pxToRem(40)}`,
  xlarge: `${pxToRem(52)}`,
  xxlarge: `${pxToRem(72)}`,
};


export const lineHeight = {
  xsmall: `${pxToRem(20)}`,
  small: `${pxToRem(24)}`,
  medium: `${pxToRem(32)}`,
  large: `${pxToRem(56)}`,
  xlarge: `${pxToRem(64)}`,
  xxlarge: `${pxToRem(80)}`,
};
