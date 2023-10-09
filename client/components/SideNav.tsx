import React from 'react';
import {
  Drawer,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

interface NavProps {
  open: boolean;
  toggleDrawer: Function;
}

function SideNav(props: NavProps) {
  const { toggleDrawer, open } = props;
  return (
    <Drawer
      id='sideNav'
      variant='temporary'
      PaperProps={{ sx: { minWidth: '300px', width: '25%' } }}
      open={open}
      onClose={() => toggleDrawer}>
      <div id='chevron'>
        <IconButton
          sx={{ color: 'white' }}
          size='large'
          onClick={e => toggleDrawer(e)}>
          <ChevronLeftIcon fontSize='large' />
        </IconButton>
      </div>
      <ul>
        <li>Dashboard</li>
        <li>Logs</li>
        <li>Nodes</li>
      </ul>

      <p>About</p>
    </Drawer>
  );
}

export default SideNav;
