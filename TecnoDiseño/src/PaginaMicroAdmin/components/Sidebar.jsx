// src/PaginaMicroAdmin/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="sticky top-0 w-64 h-screen bg-gray-900 text-white p-5 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-8">Panel de Control</h2>
        <nav>
          <ul className="space-y-6">
            <li>
              <Link to="/admin" className="flex items-center space-x-3 text-lg hover:text-gray-300">
                <span role="img" aria-label="home">🏠</span> <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/products" className="flex items-center space-x-3 text-lg hover:text-gray-300">
                <span role="img" aria-label="productos">📦</span> <span>Productos</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/orders" className="flex items-center space-x-3 text-lg hover:text-gray-300">
                <span role="img" aria-label="órdenes">📋</span> <span>Órdenes de Servicio</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/purchases" className="flex items-center space-x-3 text-lg hover:text-gray-300">
                <span role="img" aria-label="compras">💸</span> <span>Compras Realizadas</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/inventory" className="flex items-center space-x-3 text-lg hover:text-gray-300">
                <span role="img" aria-label="inventario">🛠</span> <span>Inventario</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/store" className="flex items-center space-x-3 text-lg hover:text-gray-300">
                <span role="img" aria-label="configuración de la tienda">🏬</span> <span>Configuración de la Tienda</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/categories" className="flex items-center space-x-3 text-lg hover:text-gray-300">
                <span role="img" aria-label="categorías">📑</span> <span>Categorías</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <footer className="mt-8 text-gray-500 text-sm text-center">
        © 2024 TecnoShop
      </footer>
    </aside>
  );
}
