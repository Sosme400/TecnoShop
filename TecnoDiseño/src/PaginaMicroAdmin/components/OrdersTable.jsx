// src/PaginaMicroAdmin/components/OrdersTable.jsx
import React from 'react';
import Sidebar from './Sidebar';

export default function OrdersTable() {
  const orders = [
    { id: 1, user: 'Usuario 1', item: 'Pieza 1', date: '2024-09-23', status: 'Completada', total: '$500.00' },
    { id: 2, user: 'Usuario 2', item: 'Pieza 2', date: '2024-09-25', status: 'En proceso', total: '$200.00' },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-5 w-full">
        <h2 className="text-2xl font-bold mb-5">Órdenes de Servicio</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Usuario</th>
                <th className="p-4">Pieza</th>
                <th className="p-4">Fecha del Servicio</th>
                <th className="p-4">Estado</th>
                <th className="p-4">Total</th>
                <th className="p-4">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-gray-200">
                  <td className="p-4">{order.id}</td>
                  <td className="p-4">{order.user}</td>
                  <td className="p-4">{order.item}</td>
                  <td className="p-4">{order.date}</td>
                  <td className="p-4">{order.status}</td>
                  <td className="p-4">{order.total}</td>
                  <td className="p-4">
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">Editar</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded">Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
