import React from 'react';
// TO DO - consider switching legacy mui/styles to mui/system
import { styled } from '@mui/material/styles';
// MUI COMPONENTS
import { AppBar, Toolbar, IconButton, Button, Typography } from '@mui/material';
// MUI ICONS
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// APPBAR STYLES dependent on state - theme, drawerOpen, drawerWidth
const AppBarCF = styled(AppBar, {
  shouldForwardProp: prop => prop !== 'drawerOpen',
})(({ theme, drawerOpen, drawerWidth }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(drawerOpen && {
    marginLeft: `${drawerWidth}px`,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function AppBarUsage(props) {
  const {
    drawerOpen,
    drawerWidth,
    curUser,
    curPage,
    toggleDrawer,
    handlePostWindow,
  } = props;
  return (
    <AppBar
      position='absolute'
      open={drawerOpen}
      color='error'
      drawerWidth={drawerWidth}>
      <Toolbar
        sx={{
          pr: '24px', // keep right padding when drawer closed
        }}>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='open drawer'
          onClick={toggleDrawer}
          sx={{
            marginRight: '36px',
            ...(drawerOpen && { display: 'none' }),
          }}>
          <MenuIcon />
        </IconButton>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
        <Typography
          component='h1'
          variant='h5'
          color='inherit'
          noWrap
          sx={{ flexGrow: 1, ml: 2 }}>
          {curUser.username}
        </Typography>
        <Typography component='h1' variant='h5' sx={{ flexGrow: 1 }}>
          {curPage}
        </Typography>
        <Button variant='contained' onClick={handlePostWindow} color='error'>
          Create New Post
        </Button>
      </Toolbar>
    </AppBar>
  );
}
