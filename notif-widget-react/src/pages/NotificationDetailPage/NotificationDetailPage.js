import React, { useState, useEffect, useCallback } from 'react';

import { Button, IconButton, SIZE, COLOR, VARIANT } from '@metacrm/metacrm-material-ui/dist/Button';
import IconIcOops from '@metacrm/metacrm-svg/dist/SvgIcon/svg-icons/IconIcOops';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Toolbar, AppBar, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import moment from 'moment';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
	StyledTimeArea,
	StyledNotificationDetailType,
	StyledNotificationDetailContent,
	StyledLink,
	StyledNotificationDetailInfoContainer,
	StyledImageArea,
} from './NotificationDetailPage.styles';

import {
	fetchNotificationsDetail,
	postNotificationsRead,
	postNotificationsClick,
} from 'SRC/api/notifications';
import NotificationMsg from 'SRC/components/NotificationMsg/NotificationMsg';
import { selectUserAddress } from 'SRC/store/user/user.selector';
import { formatSendingTime } from 'SRC/utils/utils';

function NotificationDetailPage() {
	const { notificationId } = useParams();
	const [notificationDetail, setNotificationDetail] = useState(null);
	const userAddress = useSelector(selectUserAddress);

	const initNotificationDetail = async () => {
		try {
			const detail = await fetchNotificationsDetail({
				address: userAddress,
				notificationId,
			});
			postNotificationsRead({
				address: userAddress,
				notificationId,
			});
			setNotificationDetail(detail);
		} catch (error) {
			console.log('error: ', error);
		}
	};

	useEffect(() => {
		initNotificationDetail();
	}, []);

	const handleOpenLink = (event, { urlLink }) => {
		event.stopPropagation();
		window.open(urlLink, '_blank');
		postNotificationsClick({ address: userAddress, urlLink, notificationId });
	};
	return (
		<Box>
			{notificationDetail && (
				<>
					<StyledTimeArea>
						{formatSendingTime(notificationDetail.scheduledSendingTime)}
					</StyledTimeArea>
					<StyledNotificationDetailInfoContainer>
						<StyledNotificationDetailType>{notificationDetail.title}</StyledNotificationDetailType>
						<StyledNotificationDetailContent>
							{notificationDetail.description}
							{notificationDetail.images.map((image, index) => (
								<StyledImageArea key={image}>
									<img src={image} className='xsIcon' alt='notificationImage' />
								</StyledImageArea>
							))}
						</StyledNotificationDetailContent>

						{notificationDetail.urls.map((url, index) => (
							<StyledLink onClick={(e) => handleOpenLink(e, { urlLink: url.link })} key={url.link}>
								{url.title}
							</StyledLink>
						))}
					</StyledNotificationDetailInfoContainer>
				</>
			)}
		</Box>
	);
}

NotificationDetailPage.propTypes = {};

NotificationDetailPage.defaultProps = {};

export default NotificationDetailPage;
