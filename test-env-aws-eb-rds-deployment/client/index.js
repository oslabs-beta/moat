import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from './routes/Login';
import Main from './routes/Main';
import Signup from './routes/signup';

// import UserProvider from './UserProvider.js'; Maybe useful for having global state if we need it
import './styles/styles.css';


const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter >
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/register' element={<Signup />} />
        <Route exact path='/main' element={<Main />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
