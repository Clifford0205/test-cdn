import request from './base/request';

export function fetchNotificationsList({ address }) {
	const config = {
		params: {
			address,
		},
	};
	return request({
		url: '/api/widget/notifications',
		method: 'get',
		config,
	});
}

export function fetchNotificationsDetail({ address, notificationId }) {
	const config = {
		params: {
			address,
		},
	};
	return request({
		url: `/api/widget/notifications/${notificationId}`,
		method: 'get',
		config,
	});
}

export function postNotificationsRead({ address, notificationId }) {
	const config = {
		data: {
			address,
			notificationId,
		},
	};
	return request({
		url: `/api/widget/notifications/read`,
		method: 'post',
		config,
	});
}

export function postNotificationsClick({ address, urlLink, notificationId }) {
	const config = {
		data: {
			address,
			urlLink,
			notificationId,
		},
	};
	return request({
		url: `/api/widget/notifications/click`,
		method: 'post',
		config,
	});
}

export default {
	fetchNotificationsList,
	fetchNotificationsDetail,
	postNotificationsClick,
	postNotificationsRead,
};
