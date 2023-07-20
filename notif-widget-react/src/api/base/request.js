import axios from 'axios';
import { set, unset, get, debounce } from 'lodash-es';

import { apiUrl } from 'SRC/features/configure';

const baseURL = apiUrl;

const apiStatus = {};

export default ({ method, url, config = {} }) => {
	const isStillGetting = get(apiStatus, url, false);

	if (isStillGetting) {
		return null;
	}

	set(apiStatus, url, true);

	const defaultConfig = {
		baseURL,
		method,
		url,
	};

	const usingConfig = Object.assign(defaultConfig, config);

	return axios(usingConfig)
		.then((response) => {
			unset(apiStatus, url);

			const code = get(response, 'status');

			const data = get(response, 'data');

			if (code === 200) {
				return data;
			}
			throw new Error(response);
		})
		.catch((error) => {
			unset(apiStatus, url);

			throw new Error(error);
		});
};
