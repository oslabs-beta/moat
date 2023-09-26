import React, { useState } from 'react';
import MainDashboard from './containers/MainDashboard';
import { getStyle } from './scss/styles.scss';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Footer from './components/Footer';

function App () {

  // Because the button is on the Header component and the SideNav is its own component I had to declare the state up here
  // REMEMBER: When passing state using TypeScript you need to setup an interface in the child component with the, format of the props you want to pass in
  const [open, openDrawer] = useState(false);

  return (
    <div style={getStyle} id='origin'>
      <MainDashboard/>
      <Header open={open} openDrawer={openDrawer}/>
      <SideNav open={open} openDrawer={openDrawer}/>
      <Footer/>
    </div>
  )
}

export default App;