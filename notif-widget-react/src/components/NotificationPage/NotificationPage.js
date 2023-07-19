import React, { useState, useEffect, useCallback } from 'react';

import { Button, IconButton, SIZE, COLOR, VARIANT } from '@metacrm/metacrm-material-ui/dist/Button';
import IconIcOops from '@metacrm/metacrm-svg/dist/SvgIcon/svg-icons/IconIcOops';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Toolbar, AppBar, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

import NotificationMsg from '../NotificationMsg/NotificationMsg';

import {
	StyledAnnounceContainer,
	StyledAnnounce,
	StyledAnnounceTitle,
	StyledAnnounceContent,
	StyledRedDot,
} from './NotificationPage.styles';

const numbers = [1, 2, 3, 4, 5];

function NotificationPage() {
	return (
		<>
			<StyledAnnounceContainer>
				<StyledAnnounce>
					<StyledRedDot />
					<StyledAnnounceTitle>Arbitrum x Radiant x Chainkink</StyledAnnounceTitle>
					<StyledAnnounceContent>
						Join Isaac,Radiant’s Director of Communications,next Tuesday,5.2.202 Join
						Isaac,Radiant’s Director of Communications,next Tuesday,5.2.202
					</StyledAnnounceContent>
				</StyledAnnounce>
			</StyledAnnounceContainer>
			{numbers.map((item, index) => (
				<NotificationMsg key={index} />
			))}
		</>
	);
}

NotificationPage.propTypes = {};

NotificationPage.defaultProps = {};

export default NotificationPage;
