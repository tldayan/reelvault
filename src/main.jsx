import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import {Provider} from "react-redux"
import './index.css';
import store from '../Components/store/store.js';




createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
