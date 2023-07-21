import request from './base/request';

export function fetchNotificationsList({ address }) {
	const config = {
		params: {
			address,
		},
	};
	return request({
		url: '/api/widget/test/notifications',
		method: 'get',
		config,
	});
}

export default {
	fetchNotificationsList,
};
