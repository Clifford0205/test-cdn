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

export function fetchNotificationsSetting({ address }) {
	const config = {
		params: {
			address,
		},
	};
	return request({
		url: `/api/widget/notifications/user`,
		method: 'get',
		config,
	});
}

export function postSubscribeChannel({ address, subscriptionChannel }) {
	const config = {
		data: {
			address,
			subscriptionChannel,
		},
	};
	return request({
		url: `/api/widget/notifications/subscribe`,
		method: 'post',
		config,
	});
}

export function postUnsubscribeChannels({ address, unsubscribeChannels }) {
	const config = {
		data: {
			address,
			unsubscribeChannels,
		},
	};
	return request({
		url: `/api/widget/notifications/unsubscribe`,
		method: 'post',
		config,
	});
}

export default {
	fetchNotificationsList,
	fetchNotificationsDetail,
	postNotificationsClick,
	postNotificationsRead,
	fetchNotificationsSetting,
	postSubscribeChannel,
	postUnsubscribeChannels,
};

// api文件:https://www.notion.so/Notification-Schema-Design-e441d29c5b38408cb660e91b96399eb4
