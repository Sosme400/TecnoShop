// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginMicro from "./PaginaMicro/LoginMicro"; // Asegúrate de que la ruta sea correcta
import RegisterMicro from "./PaginaMicro/RegisterMicro"; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginMicro />} />
        <Route path="/register" element={<RegisterMicro />} />
      </Routes>
    </Router>
  );
}

export default App;
