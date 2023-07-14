import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import { Popover } from '@mui/material';
import { IconButton, SIZE } from '@metacrm/metacrm-material-ui/dist/Button';
import { get } from 'lodash-es';
import icon from './ic_widjet.svg';
import useWindowSize from 'SRC/hooks/useWindowSize.hooks';
import { setFrameSize } from 'SRC/index';
import {
  FRAME_OPENED,
  FRAME_CLOSED,
  FRAME_HEIGHT_VIEWPORT,
} from 'SRC/constants/iframeSizes';
import PopoverContentContainer from 'SRC/components/PopoverContentContainer/PopoverContentContainer';

function App({ parentWindow }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [address, setAddress] = useState(null);
  const widgetElement = document.getElementById('meta-crm-widget');
  const size = useWindowSize();
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const onInit = async () => {
    if (!get(parentWindow, 'ethereum')) {
      return;
    }
    try {
      await parentWindow.ethereum.enable();
      const accounts = await parentWindow.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAddress(accounts[0]);
      parentWindow.ethereum.on('accountsChanged', function (accounts) {
        try {
          // Time to reload your interface with accounts[0]!
          setAddress(accounts[0]);
        } catch (error) {
          setAddress(null);
          console.error(
            'An error occurred in the accountsChanged event handler:',
            error
          );
        }
      });
    } catch (error) {
      console.error('An error occurred:', error);
      setAddress(null);
    }
  };

  useEffect(() => {
    onInit();
  }, []);

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
        sx={{ position: 'absolute', bottom: '10px', left: '10px' }}
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
        hideBackdrop
      >
        <PopoverContentContainer />
      </Popover>
    </>
  );
}

export default App;
