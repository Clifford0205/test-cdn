import styled from '@emotion/styled/macro';
import { Button, IconButton, SIZE, COLOR, VARIANT } from '@metacrm/metacrm-material-ui/dist/Button';
import { Toolbar, AppBar } from '@mui/material';

import isStyledPropsValid from 'SRC/utils/isStyledPropsValid';

const StyledHeaderContainer = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	position: 'static',
	top: 0,
	width: '100%',
	borderBottom: `1px solid ${theme.customColors.grey[400]}`,
	display: 'flex',
	padding: '11.5px 16px',
	height: '48px',
}));

const StyledHeader = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	width: '100%',
	minHeight: '24px',
}));

const StyledCenterText = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	margin: '0 auto',
	color: theme.customColors.grey[700],
	fontWeight: theme.fontWeight.BOLD,
}));

const StyledStartSlot = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	position: 'absolute',
	left: 0,
}));

const StyledStartSlotButton = styled(Button, {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({}));

const StyledEndSlot = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	position: 'absolute',
	right: 0,
}));

export {
	StyledHeaderContainer,
	StyledHeader,
	StyledCenterText,
	StyledStartSlot,
	StyledStartSlotButton,
	StyledEndSlot,
};
