import React from 'react';
import { createRoot } from 'react-dom/client';
import '@aftal/ui/styles.css';
import './gallery.css';
import { App } from './App.jsx';

createRoot(document.getElementById('root')).render(<App />);
