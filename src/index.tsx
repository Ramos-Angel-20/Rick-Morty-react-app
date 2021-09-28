import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import App from './App';

import ThemeContextProvider from './store/themeContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
