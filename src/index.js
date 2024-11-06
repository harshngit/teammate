import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PrimeReactProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <HashRouter basename='/'>
          <App />
        </HashRouter>

      </PersistGate>
    </Provider>
  </PrimeReactProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
