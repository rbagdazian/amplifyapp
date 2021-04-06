
import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import {API} from 'aws-amplify'
import IdiomaticReactList from './listrend.js'

function App() {
  const [path, setPath] = useState('');
  const [evkeys, setEvkeys] = useState('')
  
  async function fetchTime() {
    const respData = await API.get('lambdaTestApi','/time')
    setPath(respData.path)
    setEvkeys(respData.eventkeys)
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
        <h4>The current path is: {path} </h4>
        <h4>message2</h4>
        <ul>
        {IdiomaticReactList(evkeys)}
        </ul>
        </p>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
