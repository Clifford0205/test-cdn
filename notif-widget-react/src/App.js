import React, { useState, useEffect, useCallback } from 'react';

import './App.css';

import { IconButton, SIZE } from '@metacrm/metacrm-material-ui/dist/Button';
import { Popover, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { get } from 'lodash-es';
import PropTypes from 'prop-types';

import { StyledPopover, StyledIconButton, StyledRedDot } from './App.styles';
import icon from './ic_widjet.svg';

import PopoverContentContainer from 'SRC/components/PopoverContentContainer/PopoverContentContainer';
import { FRAME_OPENED, FRAME_CLOSED, FRAME_HEIGHT_VIEWPORT } from 'SRC/constants/iframeSizes';
import useWindowSize from 'SRC/hooks/useWindowSize.hooks';
import { setFrameSize } from 'SRC/index';

function App({ parentWindow }) {
	const [anchorEl, setAnchorEl] = useState(null);
	const [address, setAddress] = useState(null);
	const widgetElement = document.getElementById('meta-crm-widget');
	const size = useWindowSize();
	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;
	const theme = useTheme();

	const onInit = async () => {
		if (!get(parentWindow, 'ethereum')) {
			return;
		}
		try {
			await parentWindow.ethereum.enable();
			const accounts = await parentWindow.ethereum.request({
				method: 'eth_requestAccounts',
			});
			setAddress(accounts[0]);
			parentWindow.ethereum.on('accountsChanged', (newAccounts) => {
				try {
					// Time to reload your interface with accounts[0]!
					setAddress(newAccounts[0]);
				} catch (error) {
					setAddress(null);
					console.error('An error occurred in the accountsChanged event handler:', error);
				}
			});
		} catch (error) {
			console.error('An error occurred:', error);
			setAddress(null);
		}
	};

	useEffect(() => {
		onInit();
	}, []);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	useEffect(() => {
		if (anchorEl) {
			if (size.height > FRAME_HEIGHT_VIEWPORT[1]) {
				setFrameSize(widgetElement, FRAME_OPENED);
			} else if (size.height < FRAME_HEIGHT_VIEWPORT[0]) {
				setFrameSize(widgetElement, [400, 380]);
			} else {
				setFrameSize(widgetElement, [400, size.height]);
			}
		} else {
			setFrameSize(widgetElement, FRAME_CLOSED);
		}
	}, [anchorEl, size.height]);

	return (
		<>
			<StyledIconButton onClick={handleClick} size={60} color={theme.customColors.grey[700]}>
				{/* <i className='font-icon-ic_widjet' /> */}
				<Box position='relative'>
					<StyledRedDot />
					<i className='font-icon-ic_widjet_crook' />
				</Box>
			</StyledIconButton>
			<StyledPopover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: -10,
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				hideBackdrop
			>
				<PopoverContentContainer onClose={handleClose} />
			</StyledPopover>
		</>
	);
}

App.propTypes = {
	parentWindow: PropTypes.shape({
		ethereum: PropTypes.shape({
			enable: PropTypes.func,
			request: PropTypes.func,
			on: PropTypes.func,
		}),
	}),
};

App.defaultProps = {
	parentWindow: {
		ethereum: {
			enable: () => {},
			request: () => {},
			on: () => {},
		},
	},
};

export default App;
