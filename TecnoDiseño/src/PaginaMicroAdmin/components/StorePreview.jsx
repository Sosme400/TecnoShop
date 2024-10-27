import React from 'react';
import Sidebar from './Sidebar'; // Asegúrate de que la ruta es correcta

export default function StorePreview() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Contenido principal de la vista previa de la tienda */}
      <main className="flex-1 p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Vista de la Tienda</h1>

          {/* Sección de productos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Ejemplo de producto. Puedes mapear tus productos aquí */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <img src="https://via.placeholder.com/150" alt="Producto" className="w-full h-40 object-cover mb-4 rounded-lg"/>
              <h2 className="text-xl font-semibold">Nombre del Producto</h2>
              <p className="text-gray-500 mb-4">Descripción breve del producto</p>
              <p className="text-lg font-bold">$ Precio</p>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Añadir al Carrito</button>
            </div>
            {/* Agrega más tarjetas de producto según sea necesario */}
          </div>
        </div>
      </main>
    </div>
  );
}
