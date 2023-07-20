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

function NotificationMsg({ notificationInfo }) {
	return (
		<StyledNotificationMsgContainer to={`/detail/${notificationInfo.notificationId}`}>
			<StyledRedDotContainer>
				<StyledRedDot />
			</StyledRedDotContainer>
			<StyledNotificationContent>
				<StyledNotificationType>Announcement</StyledNotificationType>
				<StyledNotificationInfo>
					<StyledNotificationInfoText>
						NConfirmations Confirmations Confir metaCRM NConfirmations Confirmations Confir metaCRM
					</StyledNotificationInfoText>
					<StyledNotificationTime>
						<i className='font-icon-ic_clock font-size-12' />
						19:12
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
		notificationId: PropTypes.string,
	}),
};

NotificationMsg.defaultProps = {
	notificationInfo: {
		notificationId: null,
	},
};

export default NotificationMsg;
