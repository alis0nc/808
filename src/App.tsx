import React from 'react';
import { Header } from 'semantic-ui-react';
import './App.css';
import Sequence from './components/Sequence';
import TransportControls from './components/TransportControls';

function App() {
  return (
    <div className="App">
      <Header as='h1'>808</Header>
      <TransportControls />
      <Sequence />
    </div>
  );
}

export default App;
