import React, { useState, useEffect, useCallback } from 'react';

import './App.css';

import { IconButton, SIZE } from '@metacrm/metacrm-material-ui/dist/Button';
import { Popover } from '@mui/material';
import { get } from 'lodash-es';
import PropTypes from 'prop-types';

import { StyledPopover } from './App.styles';
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
				setFrameSize(widgetElement, [350, 380]);
			} else {
				setFrameSize(widgetElement, [350, size.height]);
			}
		} else {
			setFrameSize(widgetElement, FRAME_CLOSED);
		}
	}, [anchorEl, size.height]);

	return (
		<>
			<IconButton onClick={handleClick} sx={{ position: 'absolute', bottom: '10px', left: '10px' }}>
				<img src={icon} style={{ width: 60, height: 60 }} alt='widget-open-icon' />
			</IconButton>
			<StyledPopover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'top',
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
