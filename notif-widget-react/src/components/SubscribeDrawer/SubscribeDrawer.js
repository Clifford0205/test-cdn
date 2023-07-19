import React, { useState, useEffect, useCallback } from 'react';

import { Button, IconButton, SIZE, COLOR, VARIANT } from '@metacrm/metacrm-material-ui/dist/Button';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

import {
	StyledDrawer,
	StyledSubscribeAreaContainer,
	StyledSubscribeAreaGuideText,
	StyledReceivedByOtherwayContainer,
	StyledReceivedByOtherwayGuideText,
	StyledLaterButton,
} from './SubscribeDrawer.styles';

function SubscribeDrawer({ onDrawerOpen, onHandleCloseSubscribeDrawer }) {
	const theme = useTheme();
	const [contentVisible, setContentVisible] = useState(onDrawerOpen);

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
					<Button fullWidth color={COLOR.SECONDARY} variant={VARIANT.OUTLINED}>
						Resubscribe
					</Button>
				</StyledSubscribeAreaContainer>
				{/* <StyledReceivedByOtherwayContainer>
					<StyledReceivedByOtherwayGuideText>
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
					</Button>
					<StyledLaterButton
						fullWidth
						variant={VARIANT.TEXT}
						sx={{ color: theme.customColors.grey[700] }}
						onClick={onHandleCloseSubscribeDrawer}
					>
						Later
					</StyledLaterButton>
				</StyledReceivedByOtherwayContainer> */}
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
