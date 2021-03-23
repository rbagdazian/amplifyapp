
//import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
//import {API} from 'aws-amplify'


function App() {
  //const [timev, setTimev] = useState('');
  
  
  //  useEffect(() => {
  // Update the document title using the browser API
  // setTimev(API.get('lambdaTestApi','/time'))
  //  }, []);
  
  
  return (
    <div className="App">
      <header  className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
        <p>
        <h3>The current time is: (todo)</h3>
        </p>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
