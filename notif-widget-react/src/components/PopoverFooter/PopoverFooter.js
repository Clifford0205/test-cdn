import React, { useState, useEffect, useCallback } from 'react';

import { Button, IconButton, SIZE, COLOR, VARIANT } from '@metacrm/metacrm-material-ui/dist/Button';
import IconIcMetaCRM from '@metacrm/metacrm-svg/dist/SvgIcon/svg-icons/IconIcMetaCRM';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Toolbar, AppBar, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

import { StyledFooterContainer, StyledPoweredBy } from './PopoverFooter.styles';

function PopoverFooter({ onClose }) {
	const theme = useTheme();
	return (
		<StyledFooterContainer>
			<StyledPoweredBy>
				<div className='text'>Powered by</div>
				<IconIcMetaCRM sx={{ marginLeft: '5px' }} width='86px' />
			</StyledPoweredBy>
		</StyledFooterContainer>
	);
}

PopoverFooter.propTypes = {
	onClose: PropTypes.func,
};

PopoverFooter.defaultProps = {
	onClose: () => {},
};

export default PopoverFooter;
