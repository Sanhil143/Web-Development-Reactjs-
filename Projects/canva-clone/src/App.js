import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Sidebar/Home';
import Foryou from './pages/Home/Foryou';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/foryou' element={<Foryou/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
