import React, { useState, useEffect } from 'react';
import './App.css';
import { IconButton, Popover, Toolbar, AppBar } from '@mui/material';
import icon from './ic_widjet.svg';
import useWindowSize from 'SRC/hooks/useWindowSize.hooks';
import { setFrameSize } from 'SRC/index';
import {
  FRAME_OPENED,
  FRAME_CLOSED,
  FRAME_HEIGHT_VIEWPORT,
} from 'SRC/constants/iframeSizes';

function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const widgetElement = document.getElementById('meta-crm-widget');
  const size = useWindowSize();
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (anchorEl) {
      if (size.height > FRAME_HEIGHT_VIEWPORT[1]) {
        setFrameSize(widgetElement, FRAME_OPENED);
      } else if (size.height < FRAME_HEIGHT_VIEWPORT[0]) {
        setFrameSize(widgetElement, [350, 380]);
      } else {
        setFrameSize(widgetElement, [350, size.height]);
      }
    } else {
      setFrameSize(widgetElement, FRAME_CLOSED);
    }
  }, [anchorEl, size.height]);

  return (
    <>
      <IconButton
        onClick={handleClick}
        style={{ position: 'absolute', left: 20, bottom: 20, zIndex: 5000 }}
      >
        <img src={icon} style={{ width: 60, height: 60 }} />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div style={{ height: 520, overflow: 'auto', width: 320 }}>
          <AppBar position="static">
            <Toolbar>Notifications</Toolbar>
          </AppBar>
        </div>
      </Popover>
    </>
  );
}

export default App;
