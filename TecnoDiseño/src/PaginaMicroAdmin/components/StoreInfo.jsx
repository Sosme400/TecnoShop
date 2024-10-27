// src/PaginaMicroAdmin/components/StoreInfo.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';

export default function StoreInfo() {
  const [storeData, setStoreData] = useState({
    name: 'Nombre de tu Tienda',
    description: 'Descripcion de tu tienda',
    address: 'direccion de donde se ubica',
    contact: 'tu numero de contacto',
    email: 'email@example.com',
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStoreData({
      ...storeData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Datos de la tienda actualizados');
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-6">Configuración de la Tienda</h2>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Nombre de la Tienda</label>
            <input
              type="text"
              name="name"
              value={storeData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Descripción</label>
            <textarea
              name="description"
              value={storeData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              rows="3"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Dirección</label>
            <input
              type="text"
              name="address"
              value={storeData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Contacto</label>
            <input
              type="text"
              name="contact"
              value={storeData.contact}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={storeData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Sección para subir imagen */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Logo de la Tienda</label>
            <div className="flex items-center space-x-4">
              {selectedImage ? (
                <img src={selectedImage} alt="Previsualización" className="w-20 h-20 rounded-full border border-gray-300" />
              ) : (
                <div className="w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center text-gray-500">
                  Sin imagen
                </div>
              )}
              <input type="file" accept="image/*" onChange={handleImageChange} className="bg-white p-2 border border-gray-300 rounded-lg" />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-150"
          >
            Guardar Cambios
          </button>
        </form>
      </div>
    </div>
  );
}
