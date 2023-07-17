import styled from '@emotion/styled/macro';
import { Button, IconButton, SIZE, COLOR, VARIANT } from '@metacrm/metacrm-material-ui/dist/Button';
import { Toolbar, AppBar } from '@mui/material';

import isStyledPropsValid from 'SRC/utils/isStyledPropsValid';

const StyledFooterContainer = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	position: 'static',
}));

const StyledPoweredBy = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	fontSize: '12px',
	color: theme.customColors.grey[500],
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

export { StyledFooterContainer, StyledPoweredBy };
