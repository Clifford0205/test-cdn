import * as React from 'react';
import './App.css';
import { IconButton, Popover, Toolbar, AppBar } from '@mui/material';
import icon from './ic_widjet.svg';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <ConnectButton />
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
