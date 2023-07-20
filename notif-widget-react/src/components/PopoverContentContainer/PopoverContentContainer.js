import React, { useState, useEffect, useCallback } from 'react';

import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import PopoverFooter from '../PopoverFooter/PopoverFooter';
import PopoverHeader from '../PopoverHeader/PopoverHeader';
import PopoverInsideContent from '../PopoverInsideContent/PopoverInsideContent';
import SubscribeDrawer from '../SubscribeDrawer/SubscribeDrawer';

import { StyledPopoverContentContainer } from './PopoverContentContainer.styles';

import { setSubscribeDrawerOpen } from 'SRC/store/notifications/notifications.reducer';
import { selectSubscribeDrawerOpen } from 'SRC/store/notifications/notifications.selector';

console.log('重新載入');
function PopoverContentContainer({ onClose }) {
	// const [drawerOpen, setDrawerOpen] = useState(true);
	const subscribeDrawerOpen = useSelector(selectSubscribeDrawerOpen);
	const dispatch = useDispatch();

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
		// setDrawerOpen(false);
		dispatch(setSubscribeDrawerOpen(false));
	};

	return (
		<StyledPopoverContentContainer>
			<PopoverHeader onClose={onClose} />
			<PopoverInsideContent />
			{renderFooter()}
			<SubscribeDrawer
				onDrawerOpen={subscribeDrawerOpen}
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
