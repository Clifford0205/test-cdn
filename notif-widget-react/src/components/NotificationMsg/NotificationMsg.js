import React, { useState, useEffect, useCallback } from 'react';

import { Button, IconButton, SIZE, COLOR, VARIANT } from '@metacrm/metacrm-material-ui/dist/Button';
import IconIcOops from '@metacrm/metacrm-svg/dist/SvgIcon/svg-icons/IconIcOops';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Toolbar, AppBar, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

import {
	StyledNotificationMsgContainer,
	StyledRedDotContainer,
	StyledRedDot,
	StyledNotificationContent,
	StyledNotificationType,
	StyledNotificationInfo,
	StyledNotificationInfoText,
	StyledNotificationTime,
	StyledArrow,
} from './NotificationMsg.styles';

import { formatSendingTime } from 'SRC/utils/utils';

function NotificationMsg({ notificationInfo }) {
	return (
		<StyledNotificationMsgContainer to={`/detail/${notificationInfo._id}`}>
			{notificationInfo.read && (
				<StyledRedDotContainer>
					<StyledRedDot />
				</StyledRedDotContainer>
			)}
			<StyledNotificationContent>
				<StyledNotificationType>{notificationInfo.title}</StyledNotificationType>
				<StyledNotificationInfo>
					<StyledNotificationInfoText>{notificationInfo.description}</StyledNotificationInfoText>
					<StyledNotificationTime>
						<i className='font-icon-ic_clock font-size-12' />
						{formatSendingTime(notificationInfo.scheduledSendingTime)}
					</StyledNotificationTime>
				</StyledNotificationInfo>
			</StyledNotificationContent>
			<StyledArrow>
				<i className='font-icon-ic_arrowLineRight font-size-24' />
			</StyledArrow>
		</StyledNotificationMsgContainer>
	);
}

NotificationMsg.propTypes = {
	notificationInfo: PropTypes.shape({
		read: PropTypes.bool,
		_id: PropTypes.string,
		title: PropTypes.string,
		description: PropTypes.string,
		scheduledSendingTime: PropTypes.string,
	}),
};

NotificationMsg.defaultProps = {
	notificationInfo: {
		read: false,
		_id: '',
		title: '',
		description: '',
		scheduledSendingTime: '',
	},
};

export default NotificationMsg;
