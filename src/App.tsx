import React from 'react';
import { Header } from 'semantic-ui-react';
import './App.css';
import SequenceDisplay from './components/SequenceDisplay';
import TransportControls from './components/TransportControls';
import Sequence from './models/Sequence';
import { Instrument } from './models/Instrument';

function App() {
  const defaultSequence = new Sequence();
  defaultSequence.setStep(Instrument.OpenHat, 4);
  defaultSequence.setStep(Instrument.Kick, 6);
  return (
    <div className="App">
      <Header as='h1'>808</Header>
      <TransportControls />
      <SequenceDisplay sequence={defaultSequence} />
    </div>
  );
}

export default App;
