import React, { useState, useEffect, useCallback } from 'react';

import { Button, IconButton, SIZE, COLOR, VARIANT } from '@metacrm/metacrm-material-ui/dist/Button';
import IconIcOops from '@metacrm/metacrm-svg/dist/SvgIcon/svg-icons/IconIcOops';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Toolbar, AppBar, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

import NotificationMsg from '../NotificationMsg/NotificationMsg';

import {
	StyledTimeArea,
	StyledNotificationDetailType,
	StyledNotificationDetailContent,
	StyledLink,
	StyledNotificationDetailInfoContainer,
} from './NotificationDetailPage.styles';

function NotificationDetailPage() {
	return (
		<Box>
			<StyledTimeArea>18:58</StyledTimeArea>
			<StyledNotificationDetailInfoContainer>
				<StyledNotificationDetailType>Announcement</StyledNotificationDetailType>
				<StyledNotificationDetailContent>
					New 30@ APY liquidity pool available on Pontem New 30@ APY liquidity pool available on
					Pontem
				</StyledNotificationDetailContent>
				<StyledLink href='http://www.google.com' target='_blank'>
					我要參與活動報名
				</StyledLink>
			</StyledNotificationDetailInfoContainer>
		</Box>
	);
}

NotificationDetailPage.propTypes = {};

NotificationDetailPage.defaultProps = {};

export default NotificationDetailPage;
