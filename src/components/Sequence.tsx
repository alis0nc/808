import React from 'react';
import { Checkbox, Container, Grid } from 'semantic-ui-react';
import times from 'lodash/times';

// TODO: Move this to a model class
const instruments = ['Kick', 'Snare', 'Open Hat', 'Closed Hat'];

interface MeasureProps {
  instrument: string | undefined,
  offset: number,
}

const Measure = (props: MeasureProps = {instrument: undefined, offset: 0}) => {
  const {instrument, offset} = props;
  return (
    <>
      {times(8, (i) => (
        <Grid.Column>
          <Checkbox aria-label={`${instrument} ${i+1+offset}`}/>
        </Grid.Column>
      ))}
    </>
  );
};

interface InstrumentRowProps {
  instrument: string,
}

const InstrumentRow = (props: InstrumentRowProps) => {
  const {instrument} = props;
  return (
    <Grid.Row>
      <Grid.Column textAlign='right' width={4}>
      {instrument}
      </Grid.Column>
      <Grid.Column width={12}>
        <Grid stackable columns={2}>
          <Grid.Column>
            <Grid columns={8}>
              <Measure instrument={instrument} offset={0} />
            </Grid>
          </Grid.Column>
          <Grid.Column>
            <Grid columns={8}>
              <Measure instrument={instrument} offset={8} />
            </Grid>
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </Grid.Row>
  )};

// TODO: Header row with number of step

export default function Sequence() {
  return (
    <Container>
      <Grid celled>
        {instruments.map((instrument) => <InstrumentRow instrument={instrument} />)}
      </Grid>
    </Container>
  )
}
