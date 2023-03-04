import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import UpdateData from './pages/updatedata/UpdateData'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/updatedata" element={<UpdateData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
