import React, { useState, useEffect, useCallback } from 'react';

import { Button, IconButton, SIZE, COLOR, VARIANT } from '@metacrm/metacrm-material-ui/dist/Button';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Toolbar, AppBar, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import {
	StyledHeaderContainer,
	StyledHeader,
	StyledCenterText,
	StyledStartSlot,
	StyledStartSlotButton,
	StyledEndSlot,
} from './PopoverHeader.styles';

function PopoverHeader({ onClose }) {
	const theme = useTheme();
	const navigate = useNavigate();
	const location = useLocation();

	const handleToSetting = () => {
		navigate('setting');
	};

	const renderStartButton = () => {
		switch (location.pathname) {
			case '/':
				return (
					<StyledStartSlotButton
						startIcon={<i className='font-icon-ic_settingLine font-size-16' />}
						size={SIZE.XS}
						variant={VARIANT.SHADOW}
						component={Link}
						to='setting'
					>
						Setting
					</StyledStartSlotButton>
				);
			case '/setting':
			case location.pathname.includes('/detail/') && location.pathname:
				return (
					<IconButton color={theme.customColors.grey[700]} onClick={() => navigate(-1)}>
						<i className='font-icon-ic_arrowLineLeft' />
					</IconButton>
				);
			default:
				return null;
		}
	};

	const renderHeader = () => {
		switch (location.pathname) {
			case '/':
				return 'Alert History';
			case '/setting':
			case '/subscribeSuccess':
				return 'Setting';
			case location.pathname.includes('/detail/') && location.pathname:
				return '項目方名稱';
			default:
				return 'Alert History';
		}
	};

	return (
		<StyledHeaderContainer>
			<StyledHeader>
				<StyledStartSlot>{renderStartButton()}</StyledStartSlot>
				<StyledCenterText>{renderHeader()}</StyledCenterText>

				<StyledEndSlot>
					<IconButton onClick={onClose} color={theme.customColors.grey[700]}>
						<i className='font-icon-ic_x_circle font-size-20' />
					</IconButton>
				</StyledEndSlot>
			</StyledHeader>
		</StyledHeaderContainer>
	);
}

PopoverHeader.propTypes = {
	onClose: PropTypes.func,
};

PopoverHeader.defaultProps = {
	onClose: () => {},
};

export default PopoverHeader;
