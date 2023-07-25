import React, { useState, useEffect, useCallback } from 'react';

import { VARIANT } from '@metacrm/metacrm-material-ui/dist/Button';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { get } from 'lodash-es';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import {
	StyledSettingPageContainer,
	StyledNotifyWays,
	StyledAddressNotificationContainer,
	StyledSettingIcon,
	StyledAddress,
	StyledUnSubscribeText,
	StyledClickHere,
} from './SettingPage.styles';

import StatusLabel from 'SRC/components/StatusLabel/StatusLabel';
import UnsubscribeDrawer from 'SRC/components/UnsubscribeDrawer/UnsubscribeDrawer';
import { updateSubscribeChannels } from 'SRC/store/notifications/notifications.reducer';
import { selectSubscriptionChannels } from 'SRC/store/notifications/notifications.selector';
import { selectUserAddress } from 'SRC/store/user/user.selector';
import { getShortAddress } from 'SRC/utils/utils';

function SubscribeSuccessPage() {
	const theme = useTheme();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const subscriptionChannels = useSelector(selectSubscriptionChannels);
	const userAddress = useSelector(selectUserAddress);

	const [drawerOpen, setDrawerOpen] = useState(false);

	const handleOpenUnsubscribeDrawer = (e) => {
		e.preventDefault();
		setDrawerOpen(true);
	};

	const handleCloseUnsubscribeDrawer = () => {
		setDrawerOpen(false);
	};

	const handleSubscribe = async () => {
		try {
			const actionResult = await dispatch(
				updateSubscribeChannels({ address: userAddress, subscriptionChannel: 'bell' }),
			);

			if (get(actionResult, 'error')) {
				console.log('handleSubscribe error', get(actionResult, 'error.message'));
				return;
			}

			navigate('/subscribeSuccess');
		} catch (error) {
			console.log('error: ', error);
		}
	};

	return (
		<StyledSettingPageContainer>
			<StyledNotifyWays>
				<StyledAddressNotificationContainer>
					<StyledSettingIcon>
						<i className='font-icon-ic_widjet font-size-16' />
					</StyledSettingIcon>
					<StyledAddress>{getShortAddress(userAddress)}</StyledAddress>
					<Box sx={{ ml: 'auto' }}>
						{subscriptionChannels.includes('bell') ? (
							<StatusLabel>Subscribed</StatusLabel>
						) : (
							<StatusLabel type='secondary' onClick={handleSubscribe}>
								Resubscribe
							</StatusLabel>
						)}
					</Box>
				</StyledAddressNotificationContainer>
			</StyledNotifyWays>
			<StyledUnSubscribeText>
				You can{' '}
				<StyledClickHere href='#' onClick={handleOpenUnsubscribeDrawer}>
					click here
				</StyledClickHere>{' '}
				to unsubscribe
			</StyledUnSubscribeText>

			<UnsubscribeDrawer
				onDrawerOpen={drawerOpen}
				onHandleCloseUnsubscribeDrawer={handleCloseUnsubscribeDrawer}
			/>
		</StyledSettingPageContainer>
	);
}

SubscribeSuccessPage.propTypes = {};

SubscribeSuccessPage.defaultProps = {};

export default SubscribeSuccessPage;
