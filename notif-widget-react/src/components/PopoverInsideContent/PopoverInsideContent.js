import React, { useState, useEffect, useCallback } from 'react';

import { Button, IconButton, SIZE, COLOR, VARIANT } from '@metacrm/metacrm-material-ui/dist/Button';
import IconIcOops from '@metacrm/metacrm-svg/dist/SvgIcon/svg-icons/IconIcOops';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Toolbar, AppBar, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

import { StyledInsideContentContainer, StyledNoConnect } from './PopoverInsideContent.styles';

const renderNoConnect = () => (
	<StyledNoConnect>
		<IconIcOops sx={{ mb: '20px' }} width={60} height={60} />
		<div>Please connect your wallet through the website</div>
	</StyledNoConnect>
);

function PopoverInsideContent() {
	const theme = useTheme();
	return <StyledInsideContentContainer>{renderNoConnect()}</StyledInsideContentContainer>;
}

PopoverInsideContent.propTypes = {};

PopoverInsideContent.defaultProps = {};

export default PopoverInsideContent;
