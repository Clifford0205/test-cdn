import styled from '@emotion/styled/macro';

import isStyledPropsValid from 'SRC/utils/isStyledPropsValid';

const colorMap = (theme) => ({
	primary: { backgroundColor: theme.customColors.blue[200], color: theme.customColors.blue[700] },
	error: { backgroundColor: theme.customColors.pink[100], color: theme.customColors.pink[600] },
});

export const StyledStatusLabel = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme, size = 'small', type = 'primary' }) => ({
	...colorMap(theme)[type],
	...(size === 'small' && {
		fontSize: '12px',
		padding: '1.5px 4px',
		height: '17px',
		borderRadius: '15px',
	}),
}));
