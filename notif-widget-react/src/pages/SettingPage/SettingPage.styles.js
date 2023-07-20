import styled from '@emotion/styled/macro';
import { Button, IconButton, SIZE, COLOR, VARIANT } from '@metacrm/metacrm-material-ui/dist/Button';
import { Toolbar, AppBar } from '@mui/material';

import isStyledPropsValid from 'SRC/utils/isStyledPropsValid';

export const StyledSettingPageContainer = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	padding: '12px 10px',
	display: 'flex',
	flexDirection: 'column',
	height: '100%',
}));

export const StyledAddressNotificationContainer = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	padding: '12px 15px',
	background: theme.customColors.grey[200],
	borderRadius: '5px',
	display: 'flex',
	alignItems: 'center',
}));

export const StyledNotifyWays = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	flex: 1,
}));

export const StyledSettingIcon = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	marginRight: '10px',
	display: 'flex',
	color: theme.customColors.grey[700],
}));

export const StyledAddress = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	flex: 1,
	overflow: 'hidden',
	fontSize: '12px',
}));

export const StyledUnSubscribeText = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	fontSize: '12px',
	textAlign: 'center',
	paddingBottom: '10px',
}));

export const StyledClickHere = styled('a', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	color: theme.customColors.purple[500],
	textDecoration: 'underline',
}));
