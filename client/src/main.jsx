import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import AutoLogin from './Hooks/AutoLog.hook.jsx';
import router from './constants/router.jsx';
import { store } from './lib/Redux/index.js';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <AutoLogin>
        <RouterProvider router={router} />
      </AutoLogin>
    </ReduxProvider>
  </React.StrictMode>,
);
