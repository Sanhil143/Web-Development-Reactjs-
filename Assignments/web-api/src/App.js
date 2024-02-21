import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Data from "./components/Data";
import Navbar from "./static/Navbar";
import Sidebar from "./static/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/posts" Component={Data} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
