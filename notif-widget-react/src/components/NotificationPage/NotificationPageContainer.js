import React, { useState, useEffect, useCallback } from 'react';

import { Button, IconButton, SIZE, COLOR, VARIANT } from '@metacrm/metacrm-material-ui/dist/Button';
import IconIcOops from '@metacrm/metacrm-svg/dist/SvgIcon/svg-icons/IconIcOops';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Toolbar, AppBar, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { isEmpty } from 'lodash-es';
import PropTypes from 'prop-types';
import { Routes, Route, Navigate } from 'react-router-dom';

import NotificationDetailPage from '../NotificationDetailPage/NotificationDetailPage';
import NotificationMsg from '../NotificationMsg/NotificationMsg';

import NotificationPage from './NotificationPage';
import {
	StyledAnnounceContainer,
	StyledAnnounce,
	StyledAnnounceTitle,
	StyledAnnounceContent,
	StyledRedDot,
	StyledNoConnect,
	StyledNoNotification,
} from './NotificationPage.styles';

const numbers = [1, 2, 3, 4, 5];

function NotificationPageContainer() {
	const [address, setAddress] = useState(true);

	const renderNoConnect = () => (
		<StyledNoConnect>
			<IconIcOops sx={{ mb: '20px' }} width={60} height={60} />
			<div>Please connect your wallet through the website</div>
		</StyledNoConnect>
	);

	const renderWithoutNotification = () => (
		<StyledNoNotification>
			<Box sx={{ mb: '20px', fontSize: '60px' }}>
				<i className='font-icon-ic_widjet font-size-32' />
			</Box>
			<div>You haven’t received any notifacations yet</div>
		</StyledNoNotification>
	);

	const renderNotifications = () => (
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
			)
		</>
	);

	const hasAnyNotification = () => {
		if (isEmpty(numbers)) {
			return renderWithoutNotification();
		}
		return renderNotifications();
	};

	return (
		<>
			<Routes>
				<Route index element={<NotificationPage />} />
				<Route path=':notificationId' element={<NotificationDetailPage />} />
			</Routes>{' '}
		</>
	);
}

NotificationPageContainer.propTypes = {};

NotificationPageContainer.defaultProps = {};

export default NotificationPageContainer;
