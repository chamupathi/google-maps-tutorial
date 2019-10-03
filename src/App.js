import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GoogleMapsWrapper } from './GoogleMapsWrapper';

function App() {
  return (
    <div className="App">
      <h1>Google Maps With react </h1>
      <GoogleMapsWrapper lat={40.72} lng={-74.00} />
    </div>
  );
}

export default App;
