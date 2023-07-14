import React, { useState, useEffect, useCallback } from 'react';

import PopoverHeader from '../PopoverHeader/PopoverHeader';

import { StyledPopoverContentContainer } from './PopoverContentContainer.styles';

function PopoverContentContainer() {
	return (
		<StyledPopoverContentContainer>
			<PopoverHeader />
		</StyledPopoverContentContainer>
	);
}

export default PopoverContentContainer;
