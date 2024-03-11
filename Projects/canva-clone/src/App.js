import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './static/Navbar';
import Sidebar from './static/Sidebar';

function App() {
  return (
    <>
    <Navbar/>
    <Sidebar/>
    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
      </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default App;
