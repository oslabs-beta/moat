import React from 'react';
// REACT HOOKS
import { useDispatch, useSelector } from 'react-redux';
// COMPONENTS
import AppBar from '../components/AppBar.jsx';

const AppBarContainer = props => {
  const {
    drawerOpen,
    drawerWidth,
    curPage,
    curUser,
    toggleDrawer,
    handlePostWindow,
  } = props;

  return (
    <div>
      <AppBar
        drawerOpen={drawerOpen}
        drawerWidth={drawerWidth}
        curPage={curPage}
        curUser={curUser}
        handlePostWindow={handlePostWindow}
        toggleDrawer={toggleDrawer}
      />
    </div>
  );
};

export default AppBarContainer;
