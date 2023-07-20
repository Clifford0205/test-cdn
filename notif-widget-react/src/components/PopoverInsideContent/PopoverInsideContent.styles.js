import styled from '@emotion/styled/macro';
import { Button, IconButton, SIZE, COLOR, VARIANT } from '@metacrm/metacrm-material-ui/dist/Button';
import { Toolbar, AppBar } from '@mui/material';

import isStyledPropsValid from 'SRC/utils/isStyledPropsValid';

export const StyledInsideContentContainer = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	flex: 1,
	overflowY: 'auto',
	boxSizing: 'border-box',
	'&::-webkit-scrollbar': {
		width: '3px',
	},
	'&::-webkit-scrollbar-track': {
		background: '#f1f1f1',
	},
	'&::-webkit-scrollbar-thumb': {
		background: '#888',
	},
	'&::-webkit-scrollbar-thumb:hover': {
		background: '#555',
	},
}));
