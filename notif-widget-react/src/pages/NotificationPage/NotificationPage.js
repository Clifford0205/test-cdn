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
	selectAnnouncementsList,
} from 'SRC/store/notifications/notifications.selector';

const numbers = [
	{ notificationId: '1' },
	{ notificationId: '2' },
	{ notificationId: '3' },
	{ notificationId: '4' },
	{ notificationId: '5' },
];

function NotificationPage() {
	const [address, setAddress] = useState(true);
	const notificationsList = useSelector(selectNotificationsList);
	const announcementsList = useSelector(selectAnnouncementsList);

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
				{announcementsList.map((announcement, index) => (
					<StyledAnnounce to={`/detail/${announcement._id}`}>
						{!announcement.read && <StyledRedDot />}
						<StyledAnnounceTitle>{announcement.title}</StyledAnnounceTitle>
						<StyledAnnounceContent>{announcement.description}</StyledAnnounceContent>
					</StyledAnnounce>
				))}
			</StyledAnnounceContainer>
			{notificationsList.map((notification, index) => (
				<NotificationMsg notificationInfo={notification} key={index} />
			))}
		</>
	);

	const hasAnyNotification = () => {
		if (isEmpty(notificationsList) && isEmpty(announcementsList)) {
			return renderWithoutNotification();
		}
		return renderNotifications();
	};

	return <>{address ? hasAnyNotification() : renderNoConnect()}</>;
}

NotificationPage.propTypes = {};

NotificationPage.defaultProps = {};

export default NotificationPage;
