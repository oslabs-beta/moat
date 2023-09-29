import React from 'react';
import { createRoot } from 'react-dom/client';
import { render } from 'react-dom';
import App from './App';

//TODO: Refactor to most recent version of react without deprecated methods (use createRoot)

render(<App/>, document.getElementById('root'));