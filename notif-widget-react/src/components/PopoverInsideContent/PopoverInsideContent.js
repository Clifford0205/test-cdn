import React, { useState, useEffect, useCallback } from 'react';

import { Button, IconButton, SIZE, COLOR, VARIANT } from '@metacrm/metacrm-material-ui/dist/Button';
import IconIcOops from '@metacrm/metacrm-svg/dist/SvgIcon/svg-icons/IconIcOops';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Toolbar, AppBar, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { Routes, Route, Navigate } from 'react-router-dom';

import NotificationDetailPage from '../NotificationDetailPage/NotificationDetailPage';
import NotificationPage from '../NotificationPage/NotificationPage';
import NotificationPageContainer from '../NotificationPage/NotificationPageContainer';
import SettingPage from '../SettingPage/SettingPage';
import SubscribeSuccessPage from '../SubscribeSuccessPage/SubscribeSuccessPage';

import { StyledInsideContentContainer } from './PopoverInsideContent.styles';

function PopoverInsideContent() {
	const theme = useTheme();
	const [notifications, setNotifications] = useState([]);

	const renderNotificationPage = () => <NotificationPage />;

	const renderNotificationDetailPage = () => <NotificationDetailPage />;

	const renderSubscribeSuccessPage = () => <SubscribeSuccessPage />;

	const renderSettingPage = () => <SettingPage />;

	// return <StyledInsideContentContainer>{renderNotificationPage()}</StyledInsideContentContainer>;

	return (
		<StyledInsideContentContainer>
			<Routes>
				<Route index element={<NotificationPage />} />
				<Route path='detail/:notificationId' element={<NotificationDetailPage />} />
				<Route path='setting' element={<SettingPage />} />
				<Route path='subscribeSuccess' element={<SubscribeSuccessPage />} />
			</Routes>
		</StyledInsideContentContainer>
	);
}

PopoverInsideContent.propTypes = {};

PopoverInsideContent.defaultProps = {};

export default PopoverInsideContent;
