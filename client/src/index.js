import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import EnglishContextProvider from './context/EnglishContext';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Auth0Provider
    domain="dev-33p3l53z.us.auth0.com"
    clientId="cIcmvHOd2oU6wT4aBKIeT1dgtFU33HOv"
    redirectUri={window.location.origin}
  >
    <EnglishContextProvider>
        <App />
    </EnglishContextProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
