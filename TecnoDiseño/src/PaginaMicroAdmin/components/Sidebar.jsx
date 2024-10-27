// src/PaginaMicroAdmin/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-xl font-bold mb-5">Panel de control</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/admin/products" className="flex items-center space-x-2 hover:text-gray-300">
              📦 <span>Productos</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/orders" className="flex items-center space-x-2 hover:text-gray-300">
              📋 <span>Órdenes de servicio</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/purchases" className="flex items-center space-x-2 hover:text-gray-300">
              💸 <span>Compras Realizadas</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/inventory" className="flex items-center space-x-2 hover:text-gray-300">
              🛠 <span>Inventario</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/store" className="flex items-center space-x-2 hover:text-gray-300">
              🏬 <span>Configuración de la Tienda</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/categories" className="flex items-center space-x-2 hover:text-gray-300">
              📑 <span>Categorías</span>
            </Link>
          </li>
          <li>
            <Link to="/store-preview" className="flex items-center space-x-2 hover:text-gray-300">
              👀 <span>Ver como Cliente</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
