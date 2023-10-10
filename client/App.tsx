import React, { useState, MouseEvent, MouseEventHandler } from 'react';
import MainDashboard from './containers/MainDashboard';
import { getStyle } from './scss/styles.scss';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import Menu from './components/Menu';
import NodeGraphContainer from './containers/NodeGraphContainer';
import LogsContainer from './containers/LogsContainer';

const App: React.FC = () => {
  // REMEMBER: When passing state using TypeScript you need to setup an interface in the child component with the format of the props you want to pass in

  // add state handler for page navigation
  // render page based on state
  const [open, openDrawer] = useState<boolean>(false);

  //Page navigation state
  const [selection, menuSelect] = useState<string>('main');

  const toggleDrawer = (event: MouseEvent) => {
    if (open === false) openDrawer(true);
    if (open === true) openDrawer(false);
  };

  //Decides which page to render
  let page;
  switch(selection){
    case 'main':
      page = <MainDashboard open={open} />
      break;
    case 'node':
      page = <NodeGraphContainer open={open} />
      break;
    case 'logs':
      page = <LogsContainer open={open} />
      break;
  }

  return (
    <div style={getStyle} id='origin'>
      <Header open={open} toggleDrawer={toggleDrawer} />
      <Menu menuSelect={menuSelect}/>
      <SideNav open={open} toggleDrawer={toggleDrawer} />
      {page}
      <Footer open={open} />
    </div>
  );
};

export default App;
