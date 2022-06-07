import { pxToRem } from './remUtil';
import { spacing } from './units';

const white = '#fff';
const purpleLight = 'hsl(258deg 48% 39%)';
const bgGray50 = 'rgb(249 250 251)';
const bgGray300 = 'rgb(209 213 219)';
const bgGray400 = 'rgb(156 163 175)';
const bgGray500 = 'rgb(107 114 128)';

const palette = {
	common: {
		white,
		purpleLight,
		bgGray50,
		bgGray300,
		bgGray400,
		bgGray500,
	},
	primary: {
		main: bgGray500,
		light: `#EFD4AA`,
	},
};

const breakpoints = {
	xsmall: `${pxToRem(400)}`,
	small: `${pxToRem(550)}`,
	medium: `${pxToRem(750)}`,
	large: `${pxToRem(1080)}`,
	xlarge: `${pxToRem(1300)}`,
}

const typography = {
	fontFamilyPoppins:
		"Poppins, -apple-system,system-ui, BlinkMacSystemFont, Helvetica, Arial,Segoe UI, Roboto, sans-serif",
	fontFamilyManrope:
		"Manrope, -apple-system, system-ui, BlinkMacSystemFont, Helvetica, Arial,Segoe UI, Roboto, sans-serif",
};

const headerHeight = {
	height: `${pxToRem(88)}`,
}

const shape = {
	borderRadiusXsmall: spacing.xsmall,
	borderRadius: spacing.medium,
};

export const theme = {
	headerHeight,
	palette,
	typography,
	shape,
	breakpoints
};
