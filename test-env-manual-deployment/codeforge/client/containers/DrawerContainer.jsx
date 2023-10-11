import React from 'react';
// HOOKS
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// REDUCERS
import { SET_PAGE, RENDER_TEST } from '../reducers/forgeReducer';
// COMPONENTS
import Drawer from '../components/Drawer.jsx';

const DrawerContainer = props => {
  const { drawerOpen, drawerWidth, curPage, curUser, toggleDrawer } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // SELECT CATEGORY - set posts to new category
  const selectPage = page => {
    if (page === curPage) return;
    // dispatch(RENDER_TEST());
    dispatch(SET_PAGE(page));
  };

  // LOGOUT -  redirect to login page
  // TO DO - address sessions in handler
  const handleLogout = async() => {
    await fetch('/user/logout');
    navigate('/');
  };

  return (
    <div>
      <Drawer
        drawerOpen={drawerOpen}
        drawerWidth={drawerWidth}
        curPage={curPage}
        curUser={curUser}
        selectPage={selectPage}
        handleLogout={handleLogout}
        toggleDrawer={toggleDrawer}
      />
    </div>
  );
};

export default DrawerContainer;
