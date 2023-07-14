import React, { useState, useEffect } from 'react';
// import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import _ from 'lodash';

import ColorModeContext from '@metacrm/metacrm-material-ui/dist/contexts/ColorMode.context';
import useColorMode from '@metacrm/metacrm-material-ui/dist/hooks/useColorMode.hooks';

const CustomThemeProvider = props => {
  const { colorModeHooksValue, theme } = useColorMode();
  const { toggleColorMode, mode } = colorModeHooksValue;

  const widgetTheme = createTheme({
    palette: {
      background: {
        default: 'unset',
      },
    },
  });

  const newTheme = Object.assign({}, theme, widgetTheme);

  return (
    <ColorModeContext.Provider value={colorModeHooksValue}>
      <ThemeProvider theme={newTheme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default CustomThemeProvider;
