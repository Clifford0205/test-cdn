import React, { useState, useEffect, useCallback } from 'react';

import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import PopoverFooter from '../PopoverFooter/PopoverFooter';
import PopoverHeader from '../PopoverHeader/PopoverHeader';
import PopoverInsideContent from '../PopoverInsideContent/PopoverInsideContent';
import SubscribeDrawer from '../SubscribeDrawer/SubscribeDrawer';

import { StyledPopoverContentContainer } from './PopoverContentContainer.styles';

function PopoverContentContainer({ onClose }) {
	const [drawerOpen, setDrawerOpen] = useState(true);
	const location = useLocation();
	const theme = useTheme();

	const renderFooter = () => {
		switch (location.pathname) {
			case '/setting':
				return null;
			default:
				return <PopoverFooter />;
		}
	};

	const handleCloseSubscribeDrawer = () => {
		setDrawerOpen(false);
	};

	return (
		<StyledPopoverContentContainer>
			<PopoverHeader onClose={onClose} />
			<PopoverInsideContent />
			{renderFooter()}
			<SubscribeDrawer
				onDrawerOpen={drawerOpen}
				onHandleCloseSubscribeDrawer={handleCloseSubscribeDrawer}
			/>
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
