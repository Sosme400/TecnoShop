// src/PaginaMicroAdmin/components/PurchasesManager.jsx
import React from 'react';
import Sidebar from './Sidebar';

export default function PurchasesManager() {
  const purchases = [
    { id: 1, buyer: 'Cliente 1', product: 'Producto A', date: '2024-09-10', total: '$300.00' },
    { id: 2, buyer: 'Cliente 2', product: 'Producto B', date: '2024-09-12', total: '$150.00' },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-5 w-full">
        <h2 className="text-2xl font-bold mb-5">Compras Realizadas</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Comprador</th>
                <th className="p-4">Producto</th>
                <th className="p-4">Fecha de Compra</th>
                <th className="p-4">Total</th>
                <th className="p-4">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {purchases.map((purchase) => (
                <tr key={purchase.id} className="border-b border-gray-200">
                  <td className="p-4">{purchase.id}</td>
                  <td className="p-4">{purchase.buyer}</td>
                  <td className="p-4">{purchase.product}</td>
                  <td className="p-4">{purchase.date}</td>
                  <td className="p-4">{purchase.total}</td>
                  <td className="p-4">
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">Ver Detalles</button>
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
