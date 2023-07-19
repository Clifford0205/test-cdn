import styled from '@emotion/styled/macro';
import { Button } from '@metacrm/metacrm-material-ui/dist/Button';
import Drawer from '@mui/material/Drawer';

import isStyledPropsValid from 'SRC/utils/isStyledPropsValid';

export const StyledDrawer = styled(Drawer, {
	shouldForwardProp: isStyledPropsValid,
})(({ theme, open }) => ({
	'&>.MuiPaper-root': {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		background: theme.customColors.white,
		padding: '20px 16px 10px',
		boxShadow: `0px -2px 8px 0px #00000026`,
		borderRadius: `10px 10px 5px 5px`,
		transition: theme.transitions.create('max-height', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		maxHeight: '570px',
		...(!open && {
			padding: 0,
			maxHeight: 0,
			overflow: 'hidden',
			border: 0,
		}),
	},
}));

export const StyledUnsubscribeAreaContainer = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	paddingBottom: '7px',
	// borderBottom: `1px dashed ${theme.customColors.grey[400]}`,
}));

export const StyledUnSubscribeAreaGuideText = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	fontSize: '12px',
	marginBottom: '12px',
}));

export const StyledUnSubscribeCheckArea = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({}));

export const StyledSingleNotifyWay = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	color: theme.customColors.grey[700],
	display: 'flex',
	alignItems: 'center',
	'& i': {
		marginRight: '6px',
	},
}));
