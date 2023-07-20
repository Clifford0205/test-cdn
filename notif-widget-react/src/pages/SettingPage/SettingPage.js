import React, { useState, useEffect, useCallback } from 'react';

import { VARIANT } from '@metacrm/metacrm-material-ui/dist/Button';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
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
import { getShortAddress } from 'SRC/utils/utils';

function SubscribeSuccessPage() {
	const theme = useTheme();
	const navigate = useNavigate();

	const [drawerOpen, setDrawerOpen] = useState(false);

	const handleOpenUnsubscribeDrawer = (e) => {
		e.preventDefault();
		setDrawerOpen(true);
	};

	const handleCloseUnsubscribeDrawer = () => {
		setDrawerOpen(false);
	};

	const handleSubscribe = () => {
		navigate('/subscribeSuccess');
	};

	return (
		<StyledSettingPageContainer>
			<StyledNotifyWays>
				<StyledAddressNotificationContainer>
					<StyledSettingIcon>
						<i className='font-icon-ic_widjet font-size-16' />
					</StyledSettingIcon>
					<StyledAddress>
						{getShortAddress('0x81495eBd37c266ccb6516E037d7f76ABf016624e')}
					</StyledAddress>
					<Box sx={{ ml: 'auto' }}>
						{/* <StatusLabel>Subscribed</StatusLabel> */}
						<StatusLabel type='secondary' onClick={handleSubscribe}>
							Resubscribe
						</StatusLabel>
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
