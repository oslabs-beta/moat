import React, { useState, MouseEvent, MouseEventHandler } from 'react';
import MainDashboard from './containers/MainDashboard';
import { getStyle } from './scss/styles.scss';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Footer from './components/Footer';

const App: React.FC = () => {
  // REMEMBER: When passing state using TypeScript you need to setup an interface in the child component with the format of the props you want to pass in

  // const drawerWidth = 
  const [open, openDrawer] = useState<boolean>(false);

  const toggleDrawer = (event: MouseEvent) => {
    if (open === false) openDrawer(true);
    if (open === true) openDrawer(false);
  };

  console.log('open:', open);
  return (
    <div style={getStyle} id='origin'>
      <Header open={open} toggleDrawer={toggleDrawer} />
      <SideNav open={open} toggleDrawer={toggleDrawer} />
      <MainDashboard id='dashboard' open={open} />
      {/* TODO: Refactor to create grid container with divs and then update the CSS accordingly
          https://betterprogramming.pub/css-grid-in-react-f8323b521fab
        */}
      <Footer open={open} />
    </div>
  );
};

export default App;
