import React from "react";// ✅ Coming from components folder
// import Login from "./components/Login"; 
// import Register from "./components/Register";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>

     
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
  
