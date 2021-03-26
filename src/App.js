
import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import {API} from 'aws-amplify'


function App() {
  const [timev, setTimev] = useState('');
  
  async function fetchTime() {
    //console.log('in fetch time')
    const timeData = await API.get('lambdaTestApi','/time')
    //console.log(timeData)
    //console.log(timeData.timev)
    setTimev(timeData.timev)
  }
  
  
  useEffect(() => {
    fetchTime()
    }, [])
  
  
  return (
    <div className="App">
      <header  className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
        <p>
        <h3>The current time is: {timev} </h3>
        </p>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
