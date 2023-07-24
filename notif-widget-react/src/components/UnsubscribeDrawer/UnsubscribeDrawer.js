import React, { useState, useEffect, useCallback } from 'react';

import { Button, IconButton, SIZE, COLOR, VARIANT } from '@metacrm/metacrm-material-ui/dist/Button';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { isEmpty } from 'lodash-es';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';

import {
	StyledDrawer,
	StyledUnsubscribeAreaContainer,
	StyledUnSubscribeAreaGuideText,
	StyledUnSubscribeCheckArea,
	StyledSingleNotifyWay,
	StyledConfirmMsgTitle,
	StyledConfirmMsg,
	StyledCloseButton,
	StyledSuccessUnsubscribeIcon,
	StyledSuccessUnsubscribeTitle,
	StyledSuccessUnsubscribeText,
} from './UnSubscribeDrawer.styles';

import { updateUnsubscribeChannels } from 'SRC/store/notifications/notifications.reducer';
import { selectSubscriptionChannels } from 'SRC/store/notifications/notifications.selector';
import { selectUserAddress } from 'SRC/store/user/user.selector';

function UnsubscribeDrawer({ onDrawerOpen, onHandleCloseUnsubscribeDrawer }) {
	const theme = useTheme();
	const [contentVisible, setContentVisible] = useState(onDrawerOpen);
	const [selected, setSelected] = useState([]);
	const dispatch = useDispatch();
	const userAddress = useSelector(selectUserAddress);

	const subscriptionChannels = useSelector(selectSubscriptionChannels);

	const [step, setStep] = useState(1);

	useEffect(() => {
		if (!onDrawerOpen) {
			setSelected([]);
		}
	}, [onDrawerOpen, subscriptionChannels]);

	const notificationWays = [
		{
			name: 'Bell Widget',
			value: 'bell',
			icon: <i className='font-icon-ic_widjet font-size-16' />,
		},
		// {
		// 	name: 'Email',
		// 	value: 'email',
		// 	icon: <i className='font-icon-ic_email font-size-16' />,
		// },
		// {
		// 	name: 'Discord',
		// 	value: 'Discord',
		// 	icon: <i className='font-icon-ic_discord font-size-16' />,
		// },
	];

	const handleBack = () => {
		setStep(1);
	};

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

	const handleCloseDrawer = () => {
		setStep(1);
		onHandleCloseUnsubscribeDrawer();
	};

	const handleToConfirm = () => {
		setStep(2);
	};

	const handleConfirmCancel = async () => {
		try {
			await dispatch(
				updateUnsubscribeChannels({
					address: userAddress,
					unsubscribeChannels: selected,
				}),
			);
			setStep(3);
		} catch (error) {
			console.log('error: ', error);
		}
	};

	// 為了讓動畫效果更順暢
	useEffect(() => {
		if (onDrawerOpen) {
			const timer = setTimeout(() => {
				setContentVisible(true);
			}, 370); // 370ms 是容器展開的時間，可以根據實際情況調整

			return () => clearTimeout(timer);
		}
		setContentVisible(false);
		return null;
	}, [onDrawerOpen]);

	return (
		<StyledDrawer anchor='bottom' variant='permanent' open={onDrawerOpen}>
			<Box hidden={!contentVisible}>
				<Box hidden={step !== 1}>
					<StyledUnsubscribeAreaContainer>
						<Box px='8px'>
							<StyledUnSubscribeAreaGuideText>
								選擇需取消訂閱的渠道：
							</StyledUnSubscribeAreaGuideText>
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
									onClick={handleCloseDrawer}
								>
									Cancel
								</Button>
							</Grid>
							<Grid xs={6} item>
								<Button
									fullWidth
									color={COLOR.SECONDARY}
									disabled={isEmpty(selected)}
									onClick={handleToConfirm}
								>
									Next
								</Button>
							</Grid>
						</Grid>
					</StyledUnsubscribeAreaContainer>
				</Box>
				<Box hidden={step !== 2}>
					<StyledUnsubscribeAreaContainer>
						<StyledConfirmMsgTitle>Are you sure?</StyledConfirmMsgTitle>
						<StyledConfirmMsg>
							Unsubscribing may miss important information, we strongly recommend keeping at least
							one favorite channel！
						</StyledConfirmMsg>
						<Grid container spacing={0.5}>
							<Grid xs={6} item>
								<Button fullWidth color={COLOR.SETTING} variant={VARIANT.TEXT} onClick={handleBack}>
									Back
								</Button>
							</Grid>
							<Grid xs={6} item>
								<Button fullWidth color={COLOR.SECONDARY} onClick={handleConfirmCancel}>
									Unsubscribe
								</Button>
							</Grid>
						</Grid>
					</StyledUnsubscribeAreaContainer>
				</Box>
				<Box hidden={step !== 3}>
					<StyledCloseButton>
						<IconButton onClick={handleCloseDrawer} color={theme.customColors.grey[700]}>
							<i className='font-icon-ic_x_circle font-size-20' />
						</IconButton>
					</StyledCloseButton>
					<StyledSuccessUnsubscribeIcon>
						<i className='font-icon-ic_checked font-size-24' />
					</StyledSuccessUnsubscribeIcon>
					<StyledSuccessUnsubscribeTitle>Successfully unsubscribed</StyledSuccessUnsubscribeTitle>
					<StyledSuccessUnsubscribeText>
						You can turn these notifiactions back in the setting page
					</StyledSuccessUnsubscribeText>
				</Box>
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
