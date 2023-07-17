import styled from '@emotion/styled/macro';
import { Popover } from '@mui/material';

import isStyledPropsValid from 'SRC/utils/isStyledPropsValid';

const drawerWidth = 510;

const StyledPopover = styled(Popover, {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	'& .MuiPaper-root': {
		height: '100%',
		overflow: 'unset',
	},
}));

export { StyledPopover };
