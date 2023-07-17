import React, { useState, useEffect, useCallback } from 'react';

import PropTypes from 'prop-types';

import PopoverFooter from '../PopoverFooter/PopoverFooter';
import PopoverHeader from '../PopoverHeader/PopoverHeader';
import PopoverInsideContent from '../PopoverInsideContent/PopoverInsideContent';

import { StyledPopoverContentContainer } from './PopoverContentContainer.styles';

function PopoverContentContainer({ onClose }) {
	return (
		<StyledPopoverContentContainer>
			<PopoverHeader onClose={onClose} />
			<PopoverInsideContent />
			<PopoverFooter />
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
