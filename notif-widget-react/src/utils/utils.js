import moment from 'moment';

export const getShortAddress = (address) => {
	if (!address) return '-';
	return `${address.slice(0, 6)}......${address.slice(-4)}`;
};

export const formatSendingTime = (time) => {
	const date = moment(time);
	const today = moment().startOf('day');

	if (date.isSame(today, 'day')) {
		// 是今天，只顯示時間
		return date.format('HH:mm');
	}
	// 不是今天，顯示日期和時間
	return date.format('DD MMM HH:mm');
};
