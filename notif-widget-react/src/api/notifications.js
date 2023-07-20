import request from './base/request';

export function fetchNotificationsList() {
	return request({
		url: '/api/widget/test/notifications',
		method: 'get',
	});
}

export default {
	fetchNotificationsList,
};
