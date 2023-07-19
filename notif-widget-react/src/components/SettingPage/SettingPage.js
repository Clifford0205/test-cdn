import React, { useState, useEffect, useCallback } from 'react';

import { VARIANT } from '@metacrm/metacrm-material-ui/dist/Button';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

import StatusLabel from '../StatusLabel/StatusLabel';
import UnsubscribeDrawer from '../UnsubscribeDrawer/UnsubscribeDrawer';

import {
	StyledSettingPageContainer,
	StyledNotifyWays,
	StyledAddressNotificationContainer,
	StyledSettingIcon,
	StyledAddress,
	StyledUnSubscribeText,
	StyledClickHere,
} from './SettingPage.styles';

import { getShortAddress } from 'SRC/utils/utils';

function SubscribeSuccessPage() {
	const theme = useTheme();
	const [drawerOpen, setDrawerOpen] = useState(true);

	const handleOpenUnsubscribeDrawer = (e) => {
		e.preventDefault();
		setDrawerOpen(true);
	};

	const handleCloseUnsubscribeDrawer = () => {
		setDrawerOpen(false);
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
						<StatusLabel>訂閱中</StatusLabel>
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
