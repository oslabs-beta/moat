import * as React from 'react';
// HOOKS
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// REDUCERS
import {
  SET_USER,
  TOGGLE_DRAWER,
  TOGGLE_POST_WINDOW,
} from '../reducers/forgeReducer';
// MUI STYLES
import CssBaseline from '@mui/material/CssBaseline';
// MUI COMPONENTS
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// CONTAINERS
import AppBarContainer from '../containers/AppBarContainer.jsx';
import DrawerContainer from '../containers/DrawerContainer.jsx';
import PostContainer from '../components/PostContainer';
// COMPONENTS
import PostCreator from '../components/PostCreator.jsx';

const main = () => {
  const drawerWidth = 360;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  React.useEffect(() => {
    /**
     * Fetch userinfo when page loads
     */
    async function getCurrentUser() {
      const result = await fetch('/user/currentuser');
      const info = await result.json();
      if (info.isLoggedIn) {
        // set dispatch userdata
        dispatch(SET_USER({ username: info.data.username }));
        console.log('setting_user:', info.data);
      } else {
        navigate('/');
      }
    }
    getCurrentUser();
  }, []);
  // STATE
  const curUser = useSelector(state => state.forge.currentUser);
  const curPage = useSelector(state => state.forge.currentPage);
  const postWindow = useSelector(state => state.forge.newPostWindow);
  const drawerOpen = useSelector(state => state.forge.drawerOpen);

  // open and close CREATE NEW POST window
  const handlePostWindow = () => {
    dispatch(TOGGLE_POST_WINDOW());
  };

  // open and close left drawer
  const toggleDrawer = () => {
    dispatch(TOGGLE_DRAWER());
  };

  // MOVE TO DRAWER
  // SELECT CATEGORY - set posts to new category
  const selectPage = page => {
    if (page === curPage) return;
    dispatch(SET_PAGE(page));
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBarContainer
        drawerOpen={drawerOpen}
        drawerWidth={drawerWidth}
        curPage={curPage}
        curUser={curUser}
        toggleDrawer={toggleDrawer}
        handlePostWindow={handlePostWindow}
      />
      <DrawerContainer
        drawerOpen={drawerOpen}
        drawerWidth={drawerWidth}
        curUser={curUser}
        curPage={curPage}
        toggleDrawer={toggleDrawer}
      />
      <Box
        component='main'
        sx={{
          backgroundColor: theme =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}>
        <Container maxWidth='lg' sx={{ mt: 10, mb: 4 }}>
          <Box sx={{ minWidth: 120 }}>
            <PostCreator
              postWindow={postWindow}
              handlePostWindow={handlePostWindow}
              curPage={curPage}
              curUser={curUser}
            />
            <PostContainer />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default main;
