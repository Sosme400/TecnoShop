// src/PaginaMicroAdmin/components/ProductsTable.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';

export default function ProductsTable() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Audífonos', price: 100.0, quantity: 10, image: 'https://example.com/image.jpg', category: 'Audio' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(''); // 'edit' o 'new'
  const [selectedProduct, setSelectedProduct] = useState({
    name: '', price: '', quantity: '', image: '', category: ''
  });
  const [imagePreview, setImagePreview] = useState(null); // Para almacenar la vista previa de la imagen

  // Función para abrir el modal en modo "Editar" o "Nuevo"
  const handleOpenModal = (type, product = null) => {
    setModalType(type);
    setSelectedProduct(product || { name: '', price: '', quantity: '', image: '', category: '' });
    setImagePreview(product ? product.image : null); // Mostrar vista previa si el producto ya tiene una imagen
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct({ name: '', price: '', quantity: '', image: '', category: '' });
    setImagePreview(null);
  };

  // Función para guardar cambios o agregar un nuevo producto
  const handleSaveProduct = () => {
    const newProduct = { ...selectedProduct, id: products.length + 1, image: imagePreview || '' };
    if (modalType === 'edit') {
      setProducts(products.map((p) => (p.id === selectedProduct.id ? newProduct : p)));
    } else {
      setProducts([...products, newProduct]);
    }
    handleCloseModal();
  };

  // Función para eliminar un producto
  const handleDeleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // Función para actualizar campos del producto en el modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct((prev) => ({ ...prev, [name]: value }));
  };

  // Función para manejar la carga de imágenes
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file)); // Genera una vista previa de la imagen
      setSelectedProduct((prev) => ({ ...prev, image: file }));
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-4">Productos</h2>

        {/* Barra de búsqueda y botón de nuevo producto */}
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Buscar piezas / repuestos"
            className="border border-gray-300 p-2 rounded-lg"
          />
          <button
            onClick={() => handleOpenModal('new')}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
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
            {products.map((product) => (
              <tr key={product.id} className="border-b border-gray-200 text-center hover:bg-gray-100">
                <td className="p-2">{product.id}</td>
                <td className="p-2">{product.name}</td>
                <td className="p-2">${product.price.toFixed(2)}</td>
                <td className="p-2">{product.quantity}</td>
                <td className="p-2">
                  <img src={product.image} alt={product.name} className="w-12 h-12 object-cover mx-auto" />
                </td>
                <td className="p-2">{product.category}</td>
                <td className="p-2 space-x-2">
                  <button
                    onClick={() => handleOpenModal('edit', product)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal para "Nuevo" o "Editar" */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6 w-1/2 max-w-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                {modalType === 'edit' ? 'Editar Producto' : 'Nuevo Producto'}
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={selectedProduct.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                />
                <input
                  type="number"
                  name="price"
                  placeholder="Precio"
                  value={selectedProduct.price}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                />
                <input
                  type="number"
                  name="quantity"
                  placeholder="Cantidad"
                  value={selectedProduct.quantity}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                />
                
                {/* Campo de carga de imagen */}
                <div>
                  <label className="block mb-2 font-semibold">Imagen</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                  {imagePreview && (
                    <img src={imagePreview} alt="Vista previa" className="mt-4 w-32 h-32 object-cover" />
                  )}
                </div>

                <input
                  type="text"
                  name="category"
                  placeholder="Categoría"
                  value={selectedProduct.category}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </form>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={handleCloseModal}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSaveProduct}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
 