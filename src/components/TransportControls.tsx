import React, { Component } from 'react';
import { Button, Icon, Input, Label } from 'semantic-ui-react';

const BpmInput = (props : { id: string | undefined }) => {
  const { id } = props;
  const innerInput = (<input 
    type='number'
    inputMode='numeric'
    pattern='[0-9]*' 
    maxLength={3}
    min={1}
    max={300}
  />);
  const label = <Label as='label' htmlFor={id}>BPM</Label>;

  return (
    <Input 
      id={id}
      input={innerInput}
      label={label}
      labelPosition='right'
      style={{ width: '80px' }}
    />
  )
}


export default class TransportControls extends Component {
  render() {
    return (
      <>
        <Button.Group>
          <Button icon aria-label='Play'>
            <Icon name='play' />
          </Button>
          <Button icon aria-label='Stop'>
            <Icon name='stop' />
          </Button>
        </Button.Group>{' '}
        <BpmInput id='bpm'/>
      </>
    )
  }
}
