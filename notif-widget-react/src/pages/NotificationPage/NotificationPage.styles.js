import styled from '@emotion/styled/macro';
import { Button, IconButton, SIZE, COLOR, VARIANT } from '@metacrm/metacrm-material-ui/dist/Button';
import { Toolbar, AppBar } from '@mui/material';
import { Link } from 'react-router-dom';

import isStyledPropsValid from 'SRC/utils/isStyledPropsValid';

export const StyledAnnounceContainer = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	padding: '8px 16px 0',
}));

export const StyledAnnounce = styled(Link, {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	position: 'relative',
	borderRadius: '8px',
	padding: '16px',
	marginBottom: '8px',
	display: 'block',
	background:
		'linear-gradient(197.24deg, #3E4DD2 -0.55%, #5563D4 46.82%, #8088D9 80.24%, #5488C4 113.13%)',
}));

export const StyledRedDot = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	backgroundColor: '#F62424',
	height: '8px',
	width: '8px',
	borderRadius: '50%',
	position: 'absolute',
	top: '-2px',
	left: '-2px',
}));

export const StyledAnnounceTitle = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	color: theme.customColors.white,
	fontWeight: theme.fontWeight.BOLD,
	marginBottom: '10px',
}));

export const StyledAnnounceContent = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	color: theme.customColors.white,
	fontSize: '13px',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	display: '-webkit-box',
	WebkitBoxOrient: 'vertical',
	WebkitLineClamp: '2',
}));

const noContentMixin = (theme) => ({
	width: '100%',
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: '12px',
});

export const StyledNoConnect = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	...noContentMixin(theme),
}));

export const StyledNoNotification = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	...noContentMixin(theme),

	'& i': {
		fontSize: '46px',
		color: theme.customColors.grey[700],
	},
}));
