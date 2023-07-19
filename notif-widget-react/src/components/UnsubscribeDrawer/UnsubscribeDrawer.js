import React, { useState, useEffect, useCallback } from 'react';

import { Button, IconButton, SIZE, COLOR, VARIANT } from '@metacrm/metacrm-material-ui/dist/Button';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';

import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';

import {
	StyledDrawer,
	StyledUnsubscribeAreaContainer,
	StyledUnSubscribeAreaGuideText,
	StyledUnSubscribeCheckArea,
	StyledSingleNotifyWay,
} from './UnSubscribeDrawer.styles';

function UnsubscribeDrawer({ onDrawerOpen, onHandleCloseUnsubscribeDrawer }) {
	const theme = useTheme();
	const [contentVisible, setContentVisible] = useState(onDrawerOpen);
	const [selected, setSelected] = useState([]);

	const notificationWays = [
		{
			name: 'Bell Widget',
			value: 'Bell Widget',
			icon: <i className='font-icon-ic_widjet font-size-16' />,
		},
		{
			name: 'Email',
			value: 'Email',
			icon: <i className='font-icon-ic_email font-size-16' />,
		},
		{
			name: 'Discord',
			value: 'Discord',
			icon: <i className='font-icon-ic_discord font-size-16' />,
		},
	];

	const isSelected = (value) => selected.indexOf(value) !== -1;

	const handleClick = (event) => {
		if (event.target.checked) {
			setSelected((prevCheckedArray) => [...prevCheckedArray, event.target.value]);
		} else {
			setSelected((prevCheckedArray) =>
				prevCheckedArray.filter((value) => value !== event.target.value),
			);
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
				<StyledUnsubscribeAreaContainer>
					<Box px='8px'>
						<StyledUnSubscribeAreaGuideText>選擇需取消訂閱的渠道：</StyledUnSubscribeAreaGuideText>
						<StyledUnSubscribeCheckArea>
							<Grid container spacing={0.5}>
								{notificationWays.map((notificationWay, index) => {
									const isItemSelected = isSelected(notificationWay.value);
									return (
										<Grid xs={6} item key={notificationWay.name}>
											<CustomCheckbox
												label={
													<StyledSingleNotifyWay>
														{notificationWay.icon}
														{notificationWay.name}
													</StyledSingleNotifyWay>
												}
												checked={isItemSelected}
												onChange={handleClick}
												name={notificationWay.name}
												value={notificationWay.value}
											/>
										</Grid>
									);
								})}
							</Grid>
						</StyledUnSubscribeCheckArea>
					</Box>
					<Grid container spacing={0.5}>
						<Grid xs={6} item>
							<Button
								fullWidth
								color={COLOR.SETTING}
								variant={VARIANT.TEXT}
								onClick={onHandleCloseUnsubscribeDrawer}
							>
								Cancel
							</Button>
						</Grid>
						<Grid xs={6} item>
							<Button fullWidth color={COLOR.SECONDARY}>
								Next
							</Button>
						</Grid>
					</Grid>
				</StyledUnsubscribeAreaContainer>
			</Box>
		</StyledDrawer>
	);
}

UnsubscribeDrawer.propTypes = {
	onDrawerOpen: PropTypes.bool,
	onHandleCloseUnsubscribeDrawer: PropTypes.func,
};

UnsubscribeDrawer.defaultProps = {
	onDrawerOpen: true,
	onHandleCloseUnsubscribeDrawer: () => {},
};

export default UnsubscribeDrawer;
