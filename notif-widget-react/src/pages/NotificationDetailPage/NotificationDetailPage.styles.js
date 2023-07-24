import styled from '@emotion/styled/macro';
import { Button, IconButton, SIZE, COLOR, VARIANT } from '@metacrm/metacrm-material-ui/dist/Button';
import { Toolbar, AppBar } from '@mui/material';

import isStyledPropsValid from 'SRC/utils/isStyledPropsValid';

export const StyledTimeArea = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	color: theme.customColors.grey[500],
	fontSize: '12px',
	display: 'flex',
	alignItems: 'center',
	padding: '9px 12px',
}));

export const StyledNotificationDetailInfoContainer = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	padding: '0 12px 16px',
}));

export const StyledNotificationDetailType = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	fontWeight: theme.fontWeight.BOLD,
	marginBottom: '10px',
}));

export const StyledNotificationDetailContent = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	fontWeight: theme.fontWeight.MEDIUM,
	fontSize: '12px',
	marginBottom: '10px',
}));

export const StyledImageArea = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	margin: '5px 0',
	'& img': {
		width: '100%',
	},
}));

export const StyledLink = styled('a', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	color: theme.customColors.purple[500],
	fontSize: '12px',
	display: 'block',
	margin: '5px 0',
	textDecoration: 'underline',
	cursor: 'pointer',
}));
