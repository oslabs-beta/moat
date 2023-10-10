import React, { useState, MouseEvent, MouseEventHandler } from 'react';
import MainDashboard from './containers/MainDashboard';
import { getStyle } from './scss/styles.scss';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Footer from './components/Footer';

const App: React.FC = () => {
  // REMEMBER: When passing state using TypeScript you need to setup an interface in the child component with the format of the props you want to pass in

  // add state handler for page navigation
  // render page based on state
  const [open, openDrawer] = useState<boolean>(false);

  const toggleDrawer = (event: MouseEvent) => {
    if (open === false) openDrawer(true);
    if (open === true) openDrawer(false);
  };

  return (
    <div style={getStyle} id='origin'>
      <Header open={open} toggleDrawer={toggleDrawer} />
      <SideNav open={open} toggleDrawer={toggleDrawer} />
      <MainDashboard open={open} />
      {/* Log Dashboard */}
      {/* Node Graph Dashboard */}
      <Footer open={open} />
    </div>
  );
};

export default App;
