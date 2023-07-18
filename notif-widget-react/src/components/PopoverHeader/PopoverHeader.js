import React, { useState, useEffect, useCallback } from 'react';

import { Button, IconButton, SIZE, COLOR, VARIANT } from '@metacrm/metacrm-material-ui/dist/Button';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Toolbar, AppBar, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

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
	return (
		<StyledHeaderContainer>
			<StyledHeader>
				<StyledStartSlot>
					<StyledStartSlotButton
						startIcon={<i className='font-icon-ic_settingLine font-size-16' />}
						size={SIZE.XS}
						variant={VARIANT.SHADOW}
					>
						Setting
					</StyledStartSlotButton>
				</StyledStartSlot>
				<StyledCenterText>Get Notified</StyledCenterText>

				<StyledEndSlot>
					<IconButton onClick={onClose}>
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
