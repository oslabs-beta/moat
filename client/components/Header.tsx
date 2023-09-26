import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { IconButton } from '@mui/material';

// This interface needs to be changed if any new props are going to be passed in
interface HeaderProps {
  open: boolean,
  openDrawer: Function
}

function Header (props: HeaderProps) {
  return (
    <div className="header">
      {/* The onClick function opens/closes a collapsing sidebar, it can be ignored if using a static one */}
      <IconButton size='large' onClick={() => props.openDrawer(!props.open)} id='menu_icon'>
        <MenuIcon sx={{ color: 'white'}} fontSize='large'/>
      </IconButton>
      <h1 id='title'>moat</h1>
      <IconButton size='large' id='bell_icon'>
        <NotificationsIcon sx={{ color: 'white'}} fontSize='large'/>
      </IconButton>
    </div>
  )
}

export default Header;