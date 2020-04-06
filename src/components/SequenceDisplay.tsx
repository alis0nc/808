import React from 'react';
import { Checkbox, Container, Grid } from 'semantic-ui-react';
import times from 'lodash/times';
import { Instrument } from '../models/Instrument';
import Sequence from '../models/Sequence';
import Pattern from '../models/Pattern';

interface MeasureProps {
  instrument: Instrument | undefined,
  pattern: Array<boolean>,
  offset: number,
}

// TODO: convert this to a stateful component 
const Measure = (props: MeasureProps = {instrument: undefined, pattern: [], offset: 0}) => {
  const {instrument, pattern, offset} = props;
  return (
    <>
      {times(8, (i) => (
        <Grid.Column key={i}>
          {/* TODO: click handlers for setting/clearing */}
          <Checkbox 
            key={i} 
            defaultChecked={pattern[i + offset]} 
            aria-label={`${instrument} ${i+1+offset}`}
          />
        </Grid.Column>
      ))}
    </>
  );
};

interface InstrumentRowProps {
  pattern: Pattern,
}

const InstrumentRow = (props: InstrumentRowProps) => {
  // TODO this should probably be tables because it shows tabular data
  const ptrn = props.pattern;
  const {instrument, pattern} = ptrn;
  return (
    <Grid.Row>
      <Grid.Column textAlign='right' width={4}>
      {instrument}
      </Grid.Column>
      <Grid.Column width={12}>
        {/* TODO: make this rely on Pattern.STEPS_PER_BAR */}
        <Grid stackable columns={2}>
          <Grid.Column>
            <Grid columns={8}>
              <Measure instrument={instrument} pattern={pattern} offset={0} />
            </Grid>
          </Grid.Column>
          <Grid.Column>
            <Grid columns={8}>
              <Measure instrument={instrument} pattern={pattern} offset={8} />
            </Grid>
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </Grid.Row>
  )};

interface SequenceDisplayProps {
  sequence: Sequence;
}

// TODO: Header row with number of step
export default function SequenceDisplay(props: SequenceDisplayProps) {
  const { sequence } = props;
  const allInstruments: (keyof typeof Instrument)[] = 
    Object.keys(Instrument) as (keyof typeof Instrument)[];
  return (
    <Container>
      <Grid celled>
        {allInstruments.map((instrument) => (
          <InstrumentRow 
            key={instrument}
            pattern={sequence.getPatternByInstrument(Instrument[instrument])} 
          />
        ))}
      </Grid>
    </Container>
  )
}
