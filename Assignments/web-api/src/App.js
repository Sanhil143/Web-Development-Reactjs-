import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from "./components/Data";
import Navbar from "./static/Navbar";
import Sidebar from "./static/Sidebar";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Navbar />
        <Sidebar /> */}
        <Routes>
          <Route path="/posts" element={<Data />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
