
import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import {API} from 'aws-amplify'


function App() {
  const [timev, setTimev] = useState('');
  const [msg2, setMsg2] = useState('')
  
  async function fetchTime() {
    //console.log('in fetch time')
    const timeData = await API.get('lambdaTestApi','/time')
    //console.log(timeData)
    console.log(timeData.timev)
    console.log(timeData.msg2)
    setTimev(timeData.timev)
    setMsg2(timeData.msg2)
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
        <h4>The current time is: {timev} </h4>
        <h4>message2 = {msg2} </h4>
        </p>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
