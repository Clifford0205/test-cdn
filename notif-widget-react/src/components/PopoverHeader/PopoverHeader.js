import React, { useState, useEffect, useCallback } from 'react';

import { Toolbar, AppBar } from '@mui/material';

function PopoverHeader() {
	return (
		<AppBar position='static'>
			<Toolbar>Notifications</Toolbar>
		</AppBar>
	);
}

export default PopoverHeader;
