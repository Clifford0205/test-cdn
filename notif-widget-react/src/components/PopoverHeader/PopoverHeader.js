import React, { useState, useEffect, useCallback } from 'react';

import { Button, IconButton, SIZE, COLOR, VARIANT } from '@metacrm/metacrm-material-ui/dist/Button';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Toolbar, AppBar, useTheme } from '@mui/material';

import {
	StyledHeaderContainer,
	StyledHeader,
	StyledCenterText,
	StyledStartSlot,
	StyledStartSlotButton,
	StyledEndSlot,
} from './PopoverHeader.styles';

function PopoverHeader() {
	const theme = useTheme();
	return (
		<StyledHeaderContainer>
			<StyledHeader>
				<StyledStartSlot>
					<StyledStartSlotButton size={SIZE.XS} variant={VARIANT.OUTLINED}>
						Setting
					</StyledStartSlotButton>
				</StyledStartSlot>
				<i className='font-icon-ic_settingLine font-size-32' />
				<StyledCenterText>Get Notified</StyledCenterText>

				<StyledEndSlot>
					<IconButton>
						<HighlightOffIcon />
					</IconButton>
				</StyledEndSlot>
			</StyledHeader>
		</StyledHeaderContainer>
	);
}

export default PopoverHeader;
