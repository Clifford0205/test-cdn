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

function NotificationMsg() {
	return (
		<StyledNotificationMsgContainer>
			<StyledRedDotContainer>
				<StyledRedDot />
			</StyledRedDotContainer>
			<StyledNotificationContent>
				<StyledNotificationType>Announcement</StyledNotificationType>
				<StyledNotificationInfo>
					<StyledNotificationInfoText>
						NConfirmations Confirmations Confir metaCRM NConfirmations Confirmations Confir metaCRM
					</StyledNotificationInfoText>
					<StyledNotificationTime>19:12</StyledNotificationTime>
				</StyledNotificationInfo>
			</StyledNotificationContent>
			<StyledArrow>
				<i className='font-icon-ic_arrowLineRight font-size-24' />
			</StyledArrow>
		</StyledNotificationMsgContainer>
	);
}

NotificationMsg.propTypes = {};

NotificationMsg.defaultProps = {};

export default NotificationMsg;
