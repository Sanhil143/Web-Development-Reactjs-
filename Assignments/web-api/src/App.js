import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./static/Navbar";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <>
    
    <BrowserRouter>
      <div>
        {/* <Navbar />
        <Sidebar /> */}
        <Routes>
           <Route path="/" element={<Navbar/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
