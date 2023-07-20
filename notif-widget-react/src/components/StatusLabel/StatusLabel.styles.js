import styled from '@emotion/styled/macro';

import isStyledPropsValid from 'SRC/utils/isStyledPropsValid';

const colorMap = (theme) => ({
	primary: { backgroundColor: theme.customColors.blue[200], color: theme.customColors.blue[700] },
	secondary: {
		backgroundColor: theme.customColors.purple[300],
		color: theme.customColors.purple[600],
	},
	error: { backgroundColor: theme.customColors.pink[100], color: theme.customColors.pink[600] },
});

export const StyledStatusLabel = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme, size = 'small', type = 'primary', onClick = null }) => ({
	...colorMap(theme)[type],
	...(size === 'small' && {
		fontSize: '12px',
		padding: '1.5px 4px',
		height: '17px',
		borderRadius: '15px',
	}),
	...(onClick && {
		cursor: 'pointer',
	}),
}));
