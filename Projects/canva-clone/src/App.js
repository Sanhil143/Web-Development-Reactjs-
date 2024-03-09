import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './static/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
