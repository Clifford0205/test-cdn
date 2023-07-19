import styled from '@emotion/styled/macro';
import { Button } from '@metacrm/metacrm-material-ui/dist/Button';
import { Checkbox, FormControlLabel } from '@mui/material';
import Drawer from '@mui/material/Drawer';

import isStyledPropsValid from 'SRC/utils/isStyledPropsValid';

export const StyledFormControlLabel = styled(FormControlLabel, {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	marginRight: 0,
	marginLeft: 0,
}));

export const StyledCheckbox = styled(Checkbox, {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	padding: 0,
	marginRight: '4px',
	color: theme.customColors.purple[500],
	'&.Mui-checked': {
		color: theme.customColors.purple[500],
	},
}));
