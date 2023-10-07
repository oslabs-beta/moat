import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { IconButton } from '@mui/material';

// This interface needs to be changed if any new props are going to be passed in
interface HeaderProps {
  open: boolean;
  toggleDrawer: Function;
}

//TODO: Refactor to move sx styles to separate variables to make it more modular

function Header(props: HeaderProps) {
  console.log(props);
  return (
    <div id='header-container'>
      {/* The onClick function opens/closes a collapsing sidebar, it can be ignored if using a static one */}
      <div id='header' className='container'>
        <IconButton
          id='menu_icon'
          size='large'
          onClick={() => props.toggleDrawer(!props.open)}>
          <MenuIcon fontSize='large' />
        </IconButton>
        <h1>moat</h1>
        <IconButton size='large' id='bell_icon'>
          <NotificationsIcon fontSize='large' />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
