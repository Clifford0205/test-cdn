import styled from '@emotion/styled/macro';
import { Button, IconButton, SIZE, COLOR, VARIANT } from '@metacrm/metacrm-material-ui/dist/Button';
import { Toolbar, AppBar } from '@mui/material';
import Box from '@mui/material/Box';

import isStyledPropsValid from 'SRC/utils/isStyledPropsValid';

export const StyledNotificationMsgContainer = styled(Box, {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: '14px 16px',
	borderBottom: `1px solid ${theme.customColors.grey[400]}`,
	'&:hover': {
		backgroundColor: theme.customColors.purple[300],
		cursor: 'pointer',
	},
}));

export const StyledRedDotContainer = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	flex: 1,
}));

export const StyledRedDot = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	backgroundColor: '#F62424',
	height: '8px',
	width: '8px',
	borderRadius: '50%',
	marginRight: '12px',
}));

export const StyledNotificationContent = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	flex: 1,
}));

export const StyledNotificationType = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	fontWeight: theme.fontWeight.MEDIUM,
	fontFamily: 'Inter',
	color: theme.customColors.black,
	fontSize: '12px',
	marginBottom: '5px',
}));

export const StyledNotificationInfo = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	fontWeight: theme.fontWeight.MEDIUM,
	fontFamily: 'Inter',
	color: theme.customColors.grey[500],
	fontSize: '12px',
	marginBottom: '5px',
}));

export const StyledNotificationInfoText = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	maxWidth: '235px',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
	marginBottom: '5px',
}));

export const StyledNotificationTime = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	display: 'flex',
	'& i': {
		marginRight: '3px',
	},
}));

export const StyledArrow = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	'& i': {
		color: theme.customColors.grey[700],
		fontWeight: theme.fontWeight.LIGHT,
	},
}));
