import React from 'react';
import ReactDOM from 'react-dom/client';
import { GeistProvider, CssBaseline } from '@geist-ui/core'
import './index.css';
import App from './comonents/App/App';
import { Provider } from 'react-redux';
import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <GeistProvider>
    <CssBaseline />
    <App />
    </GeistProvider>
  </React.StrictMode>
  </Provider>
);

