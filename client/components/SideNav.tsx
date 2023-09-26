import React from 'react';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';

interface NavProps {
  open: boolean,
  openDrawer: Function
}

/* 
This is an MUI component which will create a sidebar that pops up on the left of the screen,
it can be closed by clicking outside of it.

The 'open' and 'openDrawer' props are the state which controls whether the sidebar is visible or not
** They can be ignored if not using a collapsing sidebar **

  <Drawer PaperProps={{ sx: { width: '25%' }}} open={props.open} onClose={() => props.openDrawer(!props.open)}>
    <ListItem>
      <ListItemText>Hello</ListItemText>
    </ListItem>
  </Drawer>

*/


function SideNav (props: NavProps) {
  return (
    <div className="sideNav">
      <ListItemButton>
        <ListItemText>About</ListItemText>
      </ListItemButton>
      <ListItemButton>
        <ListItemText>Logs</ListItemText>
      </ListItemButton>
      {/* Adding onClick functionality goes on the ListItemButton, any icons get added as nested components in the ListItemButton */}
      <ListItemButton>
        <ListItemText>More Buttons</ListItemText>
      </ListItemButton>
    </div>
  )
}

export default SideNav;