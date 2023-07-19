import React from 'react';

import { Checkbox, FormControlLabel } from '@mui/material';
import PropTypes from 'prop-types';

import { StyledFormControlLabel, StyledCheckbox } from './CustomCheckbox.styles';

import checkboxDisabled from 'SRC/assets/img/ic_checkboxDisabled.svg';

function CustomCheckbox({ label, ...props }) {
	return (
		<StyledFormControlLabel
			control={
				<StyledCheckbox
					disableRipple
					icon={<i className='font-icon-ic_checkbox font-size-20' />}
					indeterminateIcon={<img src={checkboxDisabled} alt='checked-disabled' />}
					checkedIcon={<i className='font-icon-ic_checkedbox font-size-20' />}
					{...props}
				/>
			}
			label={label}
		/>
	);
}

CustomCheckbox.propTypes = {
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

CustomCheckbox.defaultProps = { label: null };

export default CustomCheckbox;
