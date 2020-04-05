import React from 'react';
import { Button, Icon, Header } from 'semantic-ui-react';
import './App.css';
import TransportControls from './components/TransportControls';

function App() {
  return (
    <div className="App">
      <Header as='h1'>808</Header>
      <TransportControls />
    </div>
  );
}

export default App;
