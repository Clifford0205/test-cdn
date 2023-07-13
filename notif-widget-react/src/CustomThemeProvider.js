import React, { useState, useEffect } from 'react';
// import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, ThemeProvider } from '@mui/material';

import _ from 'lodash';

import ColorModeContext from '@metacrm/metacrm-material-ui/dist/contexts/ColorMode.context';
import useColorMode from '@metacrm/metacrm-material-ui/dist/hooks/useColorMode.hooks';

const CustomThemeProvider = props => {
  const { colorModeHooksValue, theme } = useColorMode();
  console.log('theme: ', theme);
  const { toggleColorMode, mode } = colorModeHooksValue;

  return (
    <ColorModeContext.Provider value={colorModeHooksValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default CustomThemeProvider;
