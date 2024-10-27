// src/PaginaMicroAdmin/components/InventoryTable.jsx
import React from 'react';
import Sidebar from './Sidebar';

export default function InventoryTable() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Contenido principal */}
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-4">Inventario</h2>
        
        {/* Barra de búsqueda y botón para agregar nuevo inventario */}
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Buscar en el inventario"
            className="border border-gray-300 p-2 rounded-lg"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Agregar Nuevo
          </button>
        </div>

        {/* Tabla de inventario */}
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-200 p-2">ID</th>
              <th className="border border-gray-200 p-2">Nombre</th>
              <th className="border border-gray-200 p-2">Cantidad</th>
              <th className="border border-gray-200 p-2">Precio por Unidad</th>
              <th className="border border-gray-200 p-2">Proveedor</th>
              <th className="border border-gray-200 p-2">Categoría</th>
              <th className="border border-gray-200 p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 p-2 text-center">1</td>
              <td className="border border-gray-200 p-2 text-center">Pieza A</td>
              <td className="border border-gray-200 p-2 text-center">50</td>
              <td className="border border-gray-200 p-2 text-center">$10.00</td>
              <td className="border border-gray-200 p-2 text-center">Proveedor XYZ</td>
              <td className="border border-gray-200 p-2 text-center">Electrónica</td>
              <td className="border border-gray-200 p-2 text-center">
                <button className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600">Editar</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Eliminar</button>
              </td>
            </tr>
            {/* Agrega más filas aquí según sea necesario */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
