import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import '../node_modules/modern-normalize/modern-normalize.css';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
