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
		maxHeight: '570px',
		minHeight: '120px',

		transition: theme.transitions.create('min-height', {
			easing: theme.transitions.easing.easeInOut,
			duration: theme.transitions.duration.complex,
		}),

		...(!open && {
			padding: 0,
			maxHeight: 0,
			minHeight: 0,
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

export const StyledConfirmMsgTitle = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	fontSize: '16px',
	marginBottom: '12px',
	fontWeight: theme.fontWeight.MEDIUM,
	textAlign: 'center',
}));

export const StyledConfirmMsg = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	marginBottom: '20px',
	color: theme.customColors.grey[700],
	fontWeight: theme.fontWeight.MEDIUM,
	textAlign: 'center',
}));

export const StyledCloseButton = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	textAlign: 'right',
	color: theme.customColors.grey[700],
	marginBottom: '5px',
}));

export const StyledSuccessUnsubscribeIcon = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	textAlign: 'center',
	color: theme.customColors.purple[500],
	marginBottom: '5px',
}));

export const StyledSuccessUnsubscribeTitle = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	fontSize: '16px',
	fontWeight: theme.fontWeight.MEDIUM,
	textAlign: 'center',
	marginBottom: '12px',
}));

export const StyledSuccessUnsubscribeText = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	color: theme.customColors.grey[700],
	textAlign: 'center',
	fontSize: '12px',
	padding: '0 40px 36px',
}));
