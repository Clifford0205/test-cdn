import styled from '@emotion/styled/macro';
import { Button } from '@metacrm/metacrm-material-ui/dist/Button';
import Drawer from '@mui/material/Drawer';

import isStyledPropsValid from 'SRC/utils/isStyledPropsValid';

export const StyledPopoverContentContainer = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	position: 'relative',
	height: '100%',
	// width: '320px',
	display: 'flex',
	flexDirection: 'column',
	borderRadius: '5px',
	// minHeight: '564px',
}));
