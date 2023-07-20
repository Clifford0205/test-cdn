import React, { useState, useEffect, useCallback } from 'react';

import { VARIANT } from '@metacrm/metacrm-material-ui/dist/Button';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import {
	StyledSubscribeSuccessPageContainer,
	StyledBackToListBtn,
} from './SubscribeSuccessPage.styles';

function SubscribeSuccessPage() {
	const theme = useTheme();

	return (
		<StyledSubscribeSuccessPageContainer>
			<Box color={theme.customColors.purple[500]} sx={{ marginBottom: '20px' }}>
				<i className='font-icon-ic_ticketCreatedSuccess font-size-64' />
			</Box>

			<Box sx={{ mb: '20px' }}>訂閱成功</Box>

			<StyledBackToListBtn variant={VARIANT.TEXT} component={Link} to='/'>
				回到推播列表 <i className='font-icon-ic_redo font-size-14' />
			</StyledBackToListBtn>
		</StyledSubscribeSuccessPageContainer>
	);
}

SubscribeSuccessPage.propTypes = {};

SubscribeSuccessPage.defaultProps = {};

export default SubscribeSuccessPage;
