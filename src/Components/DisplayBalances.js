import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

function DisplayBalances() {
    return (
        <Segment style={{textAlign: 'center'}}>
                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column>
                            <DisplayBalance value='1,045.50' label='Income' color='green' size='tiny' / >
                        </Grid.Column>
                        <Grid.Column>
                            <DisplayBalance value='623.50' label='Expenses' color='red' size='tiny' / >
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
    );
}

export default DisplayBalances;