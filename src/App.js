import logo from './logo.svg';
import './App.css';
import AddNewQuestions from './AddQuestions/NewQuestions';
import AddNewQuestion from './AddQuestions/AddNewQuestion';
import { HoldQuestions } from './AddQuestions/NewQuestions';

function App() {
  return (
    <div className="App">
         <AddNewQuestion />
    <AddNewQuestions />
    </div>
  );
}

export default App;
