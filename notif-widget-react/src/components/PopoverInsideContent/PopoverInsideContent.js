import React, { useState, useEffect, useCallback } from 'react';

import { Button, IconButton, SIZE, COLOR, VARIANT } from '@metacrm/metacrm-material-ui/dist/Button';
import IconIcOops from '@metacrm/metacrm-svg/dist/SvgIcon/svg-icons/IconIcOops';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Toolbar, AppBar, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

import NotificationPage from '../NotificationPage/NotificationPage';

import {
	StyledInsideContentContainer,
	StyledNoConnect,
	StyledNoNotification,
} from './PopoverInsideContent.styles';

function PopoverInsideContent() {
	const theme = useTheme();
	const [notifications, setNotifications] = useState([]);

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

	const renderNotificationPage = () => <NotificationPage />;

	return <StyledInsideContentContainer>{renderNotificationPage()}</StyledInsideContentContainer>;
}

PopoverInsideContent.propTypes = {};

PopoverInsideContent.defaultProps = {};

export default PopoverInsideContent;
