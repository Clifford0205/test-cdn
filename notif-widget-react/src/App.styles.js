import styled from '@emotion/styled/macro';
import { IconButton, SIZE } from '@metacrm/metacrm-material-ui/dist/Button';
import { Popover } from '@mui/material';

import isStyledPropsValid from 'SRC/utils/isStyledPropsValid';

const drawerWidth = 510;

export const StyledIconButton = styled(IconButton, {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	position: 'absolute',
	bottom: '20px',
	left: '20px',
	color: theme.customColors.grey[700],
}));

export const StyledRedDot = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	backgroundColor: theme.customColors.pink[500],
	height: '16px',
	width: '16px',
	borderRadius: '50%',
	position: 'absolute',
	top: '0',
	right: '-2px',
}));

export const StyledPopover = styled(Popover, {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	'&>.MuiPaper-root': {
		height: '90%',
		overflow: 'unset',
		maxWidth: '320px',
		minWidth: '320px',
		maxHeight: '570px',
	},
}));
