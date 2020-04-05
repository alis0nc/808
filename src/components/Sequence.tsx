import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import times from 'lodash/times';

// TODO: Move this to a model class
const instruments = ['Kick', 'Snare', 'Open Hat', 'Closed Hat'];

export default function Sequence() {
  return (
    <Container>
      <Grid>
        {/* TODO: Move this to its own class */}
        {instruments.map((instrument) => 
          <Grid.Row>
            <Grid.Column width={4}>
            {instrument}
            </Grid.Column>
            <Grid.Column width={12}>
              <Grid>
                {/* TODO: Checkboxes or something of that ilk */}
                {times(16, (i) => (
                  <Grid.Column>{i+1}</Grid.Column>
                ))}
              </Grid>
            </Grid.Column>
          </Grid.Row>
        )}
      </Grid>
    </Container>
  )
}
