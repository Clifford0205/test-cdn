import styled from '@emotion/styled/macro';

import isStyledPropsValid from 'SRC/utils/isStyledPropsValid';

const StyledPopoverContentContainer = styled('div', {
	shouldForwardProp: isStyledPropsValid,
})(({ theme }) => ({
	overflowY: 'auto',
	height: '100%',
	width: '320px',
	minHeight: '564px',
}));

export { StyledPopoverContentContainer };