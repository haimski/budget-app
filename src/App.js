import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <Container>
      <Header as='h1'>Budget</Header>
      <Statistic>
      <Statistic.Label>Your Balance</Statistic.Label>
        <Statistic.Value>5,550</Statistic.Value>
      </Statistic>
      <Segment style={{textAlign: 'center'}}>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size='tiny' color='green'>
                <Statistic.Label styler={{ textAlign: 'left' }}>Income:</Statistic.Label>
                <Statistic.Value>1045.50</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
            <Statistic size='tiny' color='green'>
                <Statistic.Label style={{ textAlign: 'left' }} >Expenses:</Statistic.Label>
                <Statistic.Value>623.50</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'>History</Header>
      <Segment color='red'>
          <Grid columns={3} textAlign='right'>
            <Grid.Row>
              <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
              <Grid.Column width={3} textAlign='right'>$10.00</Grid.Column>
              <Grid.Column width={3}>
                <Icon name='edit' bordered />
                <Icon name='trash' bordered />
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </Segment>

      <Header as='h3'>Add new transaction</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input icon='tags' width={12} label='Description' placeholder='New shinny thing' />
          <Form.Input width={4} label='Value' placeholder='100.00' icon='dollar' iconPosition='left' />
        </Form.Group>
        <Button.Group>
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary>Ok</Button>
        </Button.Group>
        </Form>
    </Container>
    
  );
}

export default App;