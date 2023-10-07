import React, { useState, MouseEvent } from 'react';
import MainDashboard from './containers/MainDashboard';
import { getStyle } from './scss/styles.scss';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Footer from './components/Footer';

function App() {
  // Because the button is on the Header component and the SideNav is its own component I had to declare the state up here
  // REMEMBER: When passing state using TypeScript you need to setup an interface in the child component with the, format of the props you want to pass in
  const [open, openDrawer] = useState(false);

  const toggleDrawer = (event: MouseEvent) => {
    if (open === false) openDrawer(true);
    if (open === true) openDrawer(false);
  };

  return (
    <div style={getStyle} id='origin'>
      <Header open={open} toggleDrawer={toggleDrawer} />
      {/*<SideNav id='sidenav' open={open} toggleDrawer={toggleDrawer}/>*/}
      <MainDashboard id='dashboard' open={open} />
      {/* TODO: Refactor to create grid container with divs and then update the CSS accordingly
          https://betterprogramming.pub/css-grid-in-react-f8323b521fab
        */}
      <Footer open={open} />
    </div>
  );
}

export default App;
