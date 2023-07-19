import React from 'react';

import PropTypes from 'prop-types';

import { StyledStatusLabel } from './StatusLabel.styles';

function StatusLabel({ size, type, children, ...otherProps }) {
	if (!children) return null;
	return (
		<StyledStatusLabel size={size} type={type} {...otherProps}>
			{children}
		</StyledStatusLabel>
	);
}

StatusLabel.propTypes = {
	size: PropTypes.string,
	type: PropTypes.string,
	children: PropTypes.node,
};

StatusLabel.defaultProps = {
	size: 'small',
	type: 'primary',
	children: null,
};

export default StatusLabel;
