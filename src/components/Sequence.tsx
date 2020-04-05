import React from 'react';
import { Checkbox, Container, Grid } from 'semantic-ui-react';
import times from 'lodash/times';

// TODO: Move this to a model class
const instruments = ['Kick', 'Snare', 'Open Hat', 'Closed Hat'];

const InstrumentRow = (props: {instrument : string}) => {
  const {instrument} = props;
  return (
    <Grid.Row>
      <Grid.Column width={4}>
      {instrument}
      </Grid.Column>
      <Grid.Column width={12}>
        <Grid>
          {times(16, (i) => (
            <Grid.Column>
              <Checkbox aria-label={`${instrument} ${i+1}`}/>
            </Grid.Column>
          ))}
        </Grid>
      </Grid.Column>
    </Grid.Row>
  )};

export default function Sequence() {
  return (
    <Container>
      <Grid>
        {instruments.map((instrument) => <InstrumentRow instrument={instrument} />)}
      </Grid>
    </Container>
  )
}
