// src/PaginaMicroAdmin/components/ProductsTable.jsx
import React from 'react';
import Sidebar from './Sidebar'; // Importa el Sidebar

export default function ProductsTable() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Contenido principal */}
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-4">Productos</h2>
        
        {/* Barra de búsqueda y botón de nuevo producto */}
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Buscar piezas / repuestos"
            className="border border-gray-300 p-2 rounded-lg"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Nuevo
          </button>
        </div>

        {/* Tabla de productos */}
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-200 p-2">ID</th>
              <th className="border border-gray-200 p-2">Nombre</th>
              <th className="border border-gray-200 p-2">Precio</th>
              <th className="border border-gray-200 p-2">Cantidad</th>
              <th className="border border-gray-200 p-2">Imagen</th>
              <th className="border border-gray-200 p-2">Categoría</th>
              <th className="border border-gray-200 p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 p-2 text-center">1</td>
              <td className="border border-gray-200 p-2 text-center">Audífonos</td>
              <td className="border border-gray-200 p-2 text-center">$100.00</td>
              <td className="border border-gray-200 p-2 text-center">10</td>
              <td className="border border-gray-200 p-2 text-center">
                <img src="https://example.com/image.jpg" alt="Product" className="w-12 h-12" />
              </td>
              <td className="border border-gray-200 p-2 text-center">Audio</td>
              <td className="border border-gray-200 p-2 text-center">
                <button className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600">Editar</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Eliminar</button>
              </td>
            </tr>
            {/* Puedes añadir más filas aquí */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
