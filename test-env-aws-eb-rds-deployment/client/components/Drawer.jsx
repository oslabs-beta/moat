import React from 'react';
// TO DO - consider switching legacy mui/styles to mui/system
import { styled } from '@mui/material/styles';
// MUI COMPONENTS
import {
  Drawer,
  Toolbar,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

// MUI ICONS
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ConstructionIcon from '@mui/icons-material/Construction';
import GridOnIcon from '@mui/icons-material/GridOn';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import LogoutIcon from '@mui/icons-material/Logout';
import FunctionsIcon from '@mui/icons-material/Functions';

// DRAWER STYLES dependent on state - theme, drawerOpen, drawerWidth
const DrawerCF = styled(Drawer, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open, drawerWidth }) => ({
  '& .muiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: `${drawerWidth}px`,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: 0,
      },
    }),
  },
}));

export default function DrawerUsage(props) {
  const {
    drawerOpen,
    drawerWidth,
    curUser,
    curPage,
    toggleDrawer,
    selectPage,
    handleLogout,
  } = props;

  return (
    <Drawer variant='persistent' open={drawerOpen}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <Typography component='h1' variant='h3' textAlign='center' sx={{ mt: 5 }}>
        {`Welcome,`}
      </Typography>
      <Typography component='h1' variant='h3' textAlign='center'>
        {`${curUser.username}`}
      </Typography>
      <List
        component='nav'
        sx={{
          pl: 4,
          mt: 5,
          height: 1,
          justifyContent: 'start',
          display: 'flex',
          flexDirection: 'column',
        }}>
        <ListItemButton
          onClick={() => selectPage('Algorithms')}
          sx={{ maxHeight: 75 }}>
          <ListItemIcon>
            <FunctionsIcon />
          </ListItemIcon>
          <ListItemText primary='Algorithms' />
        </ListItemButton>
        <ListItemButton
          onClick={() => selectPage('React')}
          sx={{ maxHeight: 75 }}>
          <ListItemIcon>
            <FilterVintageIcon />
          </ListItemIcon>
          <ListItemText primary='React' />
        </ListItemButton>
        <ListItemButton
          onClick={() => selectPage('Redux')}
          sx={{ maxHeight: 75 }}>
          <ListItemIcon>
            <GridOnIcon />
          </ListItemIcon>
          <ListItemText primary='Redux' />
        </ListItemButton>
        <ListItemButton sx={{ maxHeight: 75 }}>
          <ListItemIcon>
            <ConstructionIcon />
          </ListItemIcon>
          <ListItemText primary='More to come...' />
        </ListItemButton>
        <ListItemButton sx={{ maxHeight: 75, marginTop: 'auto' }}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary='Log Out' onClick={handleLogout} />
        </ListItemButton>
      </List>
    </Drawer>
  );
}

// export default DrawerCF;
