import Typography from 'typography';
import DoelgerTheme from 'typography-theme-doelger';
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants';
import { blue } from './colors';

DoelgerTheme.overrideThemeStyles = ({ rhythm }) => ({
	a: {
		color: blue,
		backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${blue} 1px, ${blue} 2px, rgba(0, 0, 0, 0) 2px)`,
	},
	blockquote: {
		borderLeft: `${rhythm(6 / 16)} solid ${blue}`,
	},
	[MOBILE_MEDIA_QUERY]: {
		blockquote: {
			borderLeft: `${rhythm(3 / 16)} solid ${blue}`,
		},
	},
});
DoelgerTheme.scaleRatio = 5 / 2;

delete DoelgerTheme.googleFonts;

const typography = new Typography(DoelgerTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
	typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
