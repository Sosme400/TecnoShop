// src/PaginaMicroAdmin/components/OrdersTable.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';

export default function OrdersTable() {
  const initialOrders = [
    { id: 1, user: 'Usuario 1', item: 'Pieza 1', date: '2024-09-23', status: 'Completada', total: '$500.00' },
    { id: 2, user: 'Usuario 2', item: 'Pieza 2', date: '2024-09-25', status: 'En proceso', total: '$200.00' },
  ];

  const [orders, setOrders] = useState(initialOrders);
  const [editingId, setEditingId] = useState(null);
  const [editedOrder, setEditedOrder] = useState({});

  const handleEditClick = (order) => {
    setEditingId(order.id);
    setEditedOrder({ ...order });
  };

  const handleSaveClick = (id) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? editedOrder : order
      )
    );
    setEditingId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedOrder((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-5 w-full">
        <h2 className="text-2xl font-bold mb-5 text-center">Órdenes de Servicio</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full table-auto">
            <thead className="bg-gray-800 text-white text-center">
              <tr>
                <th className="p-4 font-semibold text-sm">ID</th>
                <th className="p-4 font-semibold text-sm">Usuario</th>
                <th className="p-4 font-semibold text-sm">Pieza</th>
                <th className="p-4 font-semibold text-sm">Fecha del Servicio</th>
                <th className="p-4 font-semibold text-sm">Estado</th>
                <th className="p-4 font-semibold text-sm">Total</th>
                <th className="p-4 font-semibold text-sm">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-gray-200 text-center hover:bg-gray-100">
                  <td className="p-4 text-gray-700 text-sm">{order.id}</td>
                  <td className="p-4 text-gray-700 text-sm">
                    {editingId === order.id ? (
                      <input
                        type="text"
                        name="user"
                        value={editedOrder.user}
                        onChange={handleInputChange}
                        className="border border-gray-300 p-1 rounded w-full"
                      />
                    ) : (
                      order.user
                    )}
                  </td>
                  <td className="p-4 text-gray-700 text-sm">
                    {editingId === order.id ? (
                      <input
                        type="text"
                        name="item"
                        value={editedOrder.item}
                        onChange={handleInputChange}
                        className="border border-gray-300 p-1 rounded w-full"
                      />
                    ) : (
                      order.item
                    )}
                  </td>
                  <td className="p-4 text-gray-700 text-sm">
                    {editingId === order.id ? (
                      <input
                        type="date"
                        name="date"
                        value={editedOrder.date}
                        onChange={handleInputChange}
                        className="border border-gray-300 p-1 rounded w-full"
                      />
                    ) : (
                      order.date
                    )}
                  </td>
                  <td className="p-4 text-sm font-medium">
                    {editingId === order.id ? (
                      <select
                        name="status"
                        value={editedOrder.status}
                        onChange={handleInputChange}
                        className="border border-gray-300 p-1 rounded w-full"
                      >
                        <option value="Completada">Completada</option>
                        <option value="En proceso">En proceso</option>
                      </select>
                    ) : (
                      <span className={order.status === 'Completada' ? 'text-green-500' : 'text-yellow-500'}>
                        {order.status}
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-gray-700 text-sm">
                    {editingId === order.id ? (
                      <input
                        type="text"
                        name="total"
                        value={editedOrder.total}
                        onChange={handleInputChange}
                        className="border border-gray-300 p-1 rounded w-full"
                      />
                    ) : (
                      order.total
                    )}
                  </td>
                  <td className="p-4 space-x-2">
                    {editingId === order.id ? (
                      <button
                        onClick={() => handleSaveClick(order.id)}
                        className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
                      >
                        Guardar
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEditClick(order)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600"
                      >
                        Editar
                      </button>
                    )}
                    <button className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600">
                      Eliminar
                    </button>
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
