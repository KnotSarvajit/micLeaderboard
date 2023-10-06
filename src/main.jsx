import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from "./context";
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-xys2i3lwby8vorjz.us.auth0.com"
    clientId="Bwp0mVTMG18qGznwxQoT9vIPMHA2VcH4"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
      <App />
    </AppProvider>
  </Auth0Provider>
);
