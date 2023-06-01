import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  return(
  <>
  <h1 style={{color:'white'}}>TODO-APP</h1>
    <div className='todo-container'>
      <Header/>
      <TodoList li='Eat'/>
      <TodoList li='Code'/>
      <TodoList li='Play'/>
      <TodoList li='Study'/>
      <TodoList li='Sleep'/>
      <Button/>
    </div>
    </>
  )
}

export default App;
