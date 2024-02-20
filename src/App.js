import { Container, Header } from 'semantic-ui-react';
import './App.css';
import MainHeader from './Components/MainHeader';
import NewEntryForm from './Components/NewEntryForm';
import DisplayBalance from './Components/DisplayBalance';
import DisplayBalances from './Components/DisplayBalances';
import EntryLine from './Components/EntryLine';
import 'semantic-ui-css/semantic.min.css';


function App() {
  return (
    <Container>
      <MainHeader type='h1' title='Budget' />
      <DisplayBalance value='2,550.53' label='Your Balance' size='small' />

      <MainHeader type='h3' title='History' />
      <DisplayBalances />

      <Header as='h3'>History</Header>
      <EntryLine description='Income' value='$10.00' isExpense={false} />
      <EntryLine description='Expense' value='$7.00' isExpense={true} />
      <EntryLine description='Income' value='$33.00' isExpense={false} />

      <MainHeader type='h3' title='Add new transaction' />
      <NewEntryForm />
    </Container>
  );
}

export default App;