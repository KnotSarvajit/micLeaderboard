import React from 'react';
import Board from './components/board';
import './components/style.css';
import { useAuth0 } from "@auth0/auth0-react";


function Services() {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  console.log("Auth",isAuthenticated)

  if(isLoading) return <p>Loading....</p>

    if (!isAuthenticated) {
      return loginWithRedirect() 
      
    }
  console.log("Auth done",isAuthenticated)
    
    return (
      <div  id='main'>
        <Board/>
    </div>
  );
}

export default Services;