import React, { useState, useEffect } from 'react';

// import { ThemeProvider } from "@material-ui/core/styles";
import ColorModeContext from '@metacrm/metacrm-material-ui/dist/contexts/ColorMode.context';
import useColorMode from '@metacrm/metacrm-material-ui/dist/hooks/useColorMode.hooks';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

function CustomThemeProvider(props) {
	const { colorModeHooksValue, theme } = useColorMode();
	const { toggleColorMode, mode } = colorModeHooksValue;

	const widgetTheme = createTheme({
		typography: {
			fontSize: 14 * 0.875,
			htmlFontSize: 16,
		},
		palette: {
			background: {
				default: 'unset',
			},
		},
	});

	const newTheme = { ...theme, ...widgetTheme };

	return (
		<ColorModeContext.Provider value={colorModeHooksValue}>
			<ThemeProvider theme={newTheme}>
				<CssBaseline />
				{props.children}
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

CustomThemeProvider.propTypes = {
	children: PropTypes.node,
};

CustomThemeProvider.defaultProps = {
	children: null,
};

export default CustomThemeProvider;
