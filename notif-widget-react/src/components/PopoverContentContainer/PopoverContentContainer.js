import React, { useState, useEffect, useCallback } from 'react';

import PropTypes from 'prop-types';

import PopoverHeader from '../PopoverHeader/PopoverHeader';

import { StyledPopoverContentContainer } from './PopoverContentContainer.styles';

function PopoverContentContainer({ onClose }) {
	return (
		<StyledPopoverContentContainer>
			<PopoverHeader onClose={onClose} />
		</StyledPopoverContentContainer>
	);
}

PopoverContentContainer.propTypes = {
	onClose: PropTypes.func,
};

PopoverContentContainer.defaultProps = {
	onClose: () => {},
};

export default PopoverContentContainer;
