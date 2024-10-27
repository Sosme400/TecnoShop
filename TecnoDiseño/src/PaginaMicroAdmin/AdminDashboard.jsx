// src/PaginaMicroAdmin/AdminDashboard.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar"; // Asegúrate de que la ruta sea correcta

export default function AdminDashboard() {
  return (
    <div className="flex">
      <Sidebar /> {/* Solo un Sidebar aquí */}
      <main className="flex-1 p-8 bg-gray-200">
        <Outlet /> {/* Contenido dinámico según la ruta */}
      </main>
    </div>
  );
}
