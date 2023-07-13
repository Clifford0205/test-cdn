import * as React from 'react';
import { IconButton, Popover, Toolbar, AppBar } from '@mui/material';
import icon from './ic_widjet.svg';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Test() {
  //   const [anchorEl, setAnchorEl] = React.useState(null);

  //   const handleClick = event => {
  //     setAnchorEl(event.currentTarget);
  //   };

  //   const handleClose = () => {
  //     setAnchorEl(null);
  //   };

  //   const open = Boolean(anchorEl);
  //   const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <IconButton
        // onClick={handleClick}
        style={{ position: 'absolute', left: 20, bottom: 20, zIndex: 5000 }}
      >
        <img src={icon} style={{ width: 60, height: 60 }} />
      </IconButton>
    </>
  );
}

export default Test;
