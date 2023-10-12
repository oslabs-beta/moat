import React, { Dispatch, SetStateAction } from 'react';
import {
  Drawer,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HexagonIcon from '@mui/icons-material/Hexagon';

import Menu from './Menu';

interface NavProps {
  open: boolean;
  toggleDrawer: Function;
  menuSelect: Dispatch<SetStateAction<string>>;
}

function SideNav(props: NavProps) {
  const { toggleDrawer, open } = props;
  const { menuSelect } = props;
  return (
    <Drawer
      className='sideNav'
      variant='temporary'
      PaperProps={{
        sx: {
          minWidth: '300px',
          width: '25%',
        },
      }}
      open={open}
      onClose={() => toggleDrawer}>
      <div id='chevron'>
        <IconButton
          sx={{ color: 'white' }}
          size='large'
          onClick={e => toggleDrawer(e)}>
          <ChevronLeftIcon style={{ fontSize: 45 }} />
        </IconButton>
      </div>
      <div id='nav-content'>
        <Menu menuSelect={menuSelect} />
        <div id='top-nav-content'>
          <p className='large-text'>
            <strong>moat</strong> is a security-first monitoring tool that
            watches over Kubernetes clusters. View health data on the main
            dashboard, visualize cluster nodes, and go in-depth with detailed
            logs.
          </p>
          <p className='large-text'>
            moat leverages Prometheus and Grafana to scan and share data about
            K8s clusters.
          </p>
          <div className='security-feature'>
            <h3>Security Feature 1 </h3>
            <p className='small-text'>
              <em>Launched Oct 12 2023</em>
            </p>
          </div>
          <p className='large-text'>
            View data about excessive log-in attempts to your AWS account.
          </p>
        </div>
        <div id='bottom-nav-content'>
          <p className='small-text'>
            Built by Meredith Frazier Britt, Anil Kondaveeti, Gayle Martin, Ivy
            Shmikler, and Max Weiner
          </p>
        </div>
      </div>
    </Drawer>
  );
}

export default SideNav;
