import React, { useState, useEffect, useCallback } from 'react';

import { Button, IconButton, SIZE, COLOR, VARIANT } from '@metacrm/metacrm-material-ui/dist/Button';
import IconIcOops from '@metacrm/metacrm-svg/dist/SvgIcon/svg-icons/IconIcOops';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Toolbar, AppBar, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { isEmpty } from 'lodash-es';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import {
	StyledAnnounceContainer,
	StyledAnnounce,
	StyledAnnounceTitle,
	StyledAnnounceContent,
	StyledRedDot,
	StyledNoConnect,
	StyledNoNotification,
} from './NotificationPage.styles';

import NotificationMsg from 'SRC/components/NotificationMsg/NotificationMsg';
import {
	selectNotificationsList,
	selectAnnouncements,
} from 'SRC/store/notifications/notifications.selector';
import { selectUserAddress } from 'SRC/store/user/user.selector';

function NotificationPage() {
	const notificationsList = useSelector(selectNotificationsList);
	const announcements = useSelector(selectAnnouncements);
	const userAddress = useSelector(selectUserAddress);

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
				<StyledAnnounce to={`/detail/${announcements._id}`} key={announcements._id}>
					{!announcements.read && <StyledRedDot />}
					<StyledAnnounceTitle>{announcements.title}</StyledAnnounceTitle>
					<StyledAnnounceContent>{announcements.description}</StyledAnnounceContent>
				</StyledAnnounce>
			</StyledAnnounceContainer>
			{notificationsList.map((notification, index) => (
				<NotificationMsg notificationInfo={notification} key={notification._id} />
			))}
		</>
	);

	const hasAnyNotification = () => {
		if (isEmpty(notificationsList) && isEmpty(announcements)) {
			return renderWithoutNotification();
		}
		return renderNotifications();
	};

	return <>{userAddress ? hasAnyNotification() : renderNoConnect()}</>;
}

NotificationPage.propTypes = {};

NotificationPage.defaultProps = {};

export default NotificationPage;
