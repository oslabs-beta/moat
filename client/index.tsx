import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// with TS, check if root element exists before rendering
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(<App />);
