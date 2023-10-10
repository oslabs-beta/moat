import React, { Dispatch, MouseEventHandler, SetStateAction } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { IconButton } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import { Button } from '@mui/material';

const style = {
  button: {
    background: '#2a65e8'
  },
};

interface MenuProps {
  menuSelect: Dispatch<SetStateAction<string>>;
}

function Menu(props: MenuProps) {
  const { menuSelect } = props;

  return (
    <div id='menu-container'>
      <div id='menu'>
        <div></div>
          <ButtonGroup variant="contained" aria-label="outlined primary button group" orientation='vertical'>
            <Button style={style.button} onClick={() => {menuSelect('main')}}>Main Dashboard</Button>
            <Button style={style.button} onClick={() => {menuSelect('node')}}>Node Graph</Button>
            <Button style={style.button} onClick={() => {menuSelect('logs')}}>Logs Dashboard</Button>
          </ButtonGroup>
        <div></div>
      </div>
    </div>
  );
}

export default Menu;