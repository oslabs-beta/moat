import React from 'react';
import { Button } from '@mui/material';
import MainDashboard from './containers/MainDashboard';
import { getStyle } from './scss/styles.scss';
import Header from './components/Header';
import SideNav from './components/SideNav';
import ScrollBar from './components/ScrollBar';
import Footer from './components/Footer';
import Title from './components/Title';

function App () {
  return (
    <div style={getStyle}>
      <h1>This is App</h1>
      <MainDashboard/>
      <Header/>
      <SideNav/>
      <Footer/>
      <ScrollBar/>
      <Title/>
    </div>
  )
}

export default App;