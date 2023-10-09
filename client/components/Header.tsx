import React, { MouseEventHandler } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { IconButton } from '@mui/material';

interface HeaderProps {
  open: boolean;
  toggleDrawer: MouseEventHandler;
}

function Header(props: HeaderProps) {
  const { toggleDrawer } = props;

  return (
    <div id='header-container'>
      <div id='header' className='container'>
        <IconButton id='menu_icon' size='large' onClick={e => toggleDrawer(e)}>
          <MenuIcon fontSize='large' />
        </IconButton>
        <h1>moat</h1>
        <IconButton id='bell_icon'>
          <NotificationsIcon fontSize='large' />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
