import React, { useState, useEffect, useCallback } from 'react';

import { Button, IconButton, SIZE, COLOR, VARIANT } from '@metacrm/metacrm-material-ui/dist/Button';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';

import PopoverFooter from '../PopoverFooter/PopoverFooter';
import PopoverHeader from '../PopoverHeader/PopoverHeader';
import PopoverInsideContent from '../PopoverInsideContent/PopoverInsideContent';
import SubscribeDrawer from '../SubscribeDrawer/SubscribeDrawer';

import { StyledPopoverContentContainer } from './PopoverContentContainer.styles';

function PopoverContentContainer({ onClose }) {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const theme = useTheme();

	const handleCloseSubscribeDrawer = () => {
		setDrawerOpen(false);
	};

	return (
		<StyledPopoverContentContainer>
			<PopoverHeader onClose={onClose} />
			<PopoverInsideContent />
			{/* <PopoverFooter /> */}
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
