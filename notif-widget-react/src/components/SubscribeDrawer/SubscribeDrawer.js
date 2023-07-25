import React, { useState, useEffect, useCallback } from 'react';

import { Button, IconButton, SIZE, COLOR, VARIANT } from '@metacrm/metacrm-material-ui/dist/Button';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { get } from 'lodash-es';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import {
	StyledDrawer,
	StyledSubscribeAreaContainer,
	StyledSubscribeAreaGuideText,
	StyledReSubscribeButton,
	StyledReceivedByOtherwayContainer,
	StyledReceivedByOtherwayGuideText,
	StyledLaterButton,
} from './SubscribeDrawer.styles';

import { updateSubscribeChannels } from 'SRC/store/notifications/notifications.reducer';
import { selectUserAddress } from 'SRC/store/user/user.selector';

function SubscribeDrawer({ onDrawerOpen, onHandleCloseSubscribeDrawer }) {
	const theme = useTheme();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const userAddress = useSelector(selectUserAddress);

	const [contentVisible, setContentVisible] = useState(onDrawerOpen);

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
			onHandleCloseSubscribeDrawer();
		} catch (error) {
			console.log('error: ', error);
		}
	};

	// 為了讓動畫效果更順暢
	useEffect(() => {
		if (onDrawerOpen) {
			const timer = setTimeout(() => {
				setContentVisible(true);
			}, 150); // 150ms 是容器展開的時間，可以根據實際情況調整

			return () => clearTimeout(timer);
		}
		setContentVisible(false);
		return null;
	}, [onDrawerOpen]);

	return (
		<StyledDrawer anchor='bottom' variant='permanent' open={onDrawerOpen}>
			<Box hidden={!contentVisible}>
				<StyledSubscribeAreaContainer>
					<StyledSubscribeAreaGuideText>
						開啟小鈴鐺，直接在此接收管理重要訊息。
					</StyledSubscribeAreaGuideText>
					<StyledReSubscribeButton
						fullWidth
						color={COLOR.SECONDARY}
						variant={VARIANT.OUTLINED}
						onClick={handleSubscribe}
					>
						<i className='font-icon-ic_bell font-size-18' /> Resubscribe
					</StyledReSubscribeButton>
				</StyledSubscribeAreaContainer>
				<StyledReceivedByOtherwayContainer>
					{/* <StyledReceivedByOtherwayGuideText>
						你還可以透過以下渠道接收優惠訊息與公告。
					</StyledReceivedByOtherwayGuideText>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							marginBottom: '14px',
						}}
					>
						<Box color={theme.customColors.grey[700]} sx={{ mx: '13px' }}>
							<i className='font-icon-ic_email font-size-32' />
						</Box>
						<Box color={theme.customColors.grey[700]} sx={{ mx: '13px' }}>
							<i className='font-icon-ic_discord font-size-32' />
						</Box>
					</Box>
					<Button fullWidth color={COLOR.SECONDARY} sx={{ marginBottom: '5px' }}>
						Learn more
					</Button> */}
					<StyledLaterButton
						fullWidth
						variant={VARIANT.TEXT}
						sx={{ color: theme.customColors.grey[700] }}
						onClick={onHandleCloseSubscribeDrawer}
					>
						Later
					</StyledLaterButton>
				</StyledReceivedByOtherwayContainer>
			</Box>
		</StyledDrawer>
	);
}

SubscribeDrawer.propTypes = {
	onDrawerOpen: PropTypes.bool,
	onHandleCloseSubscribeDrawer: PropTypes.func,
};

SubscribeDrawer.defaultProps = {
	onDrawerOpen: true,
	onHandleCloseSubscribeDrawer: () => {},
};

export default SubscribeDrawer;
