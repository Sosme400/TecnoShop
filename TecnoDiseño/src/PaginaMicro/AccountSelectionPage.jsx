// src/PaginaMicro/AccountSelectionPage.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function AccountSelectionPage() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-neutral-200 dark:bg-neutral-700">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
          Selecciona tu tipo de cuenta
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Elige el tipo de cuenta para comenzar con TecnoShop
        </p>
      </div>
      
      <div className="flex gap-10">
        {/* Opción de Cuenta de Cliente */}
        <Link to="/register-client" className="group">
          <div className="w-64 h-48 bg-blue-500 text-white flex flex-col justify-center items-center rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-600">
            <span className="text-2xl font-semibold">Cliente</span>
            <p className="text-center text-sm mt-2">
              Compra productos y accede a ofertas exclusivas
            </p>
          </div>
        </Link>

        {/* Opción de Cuenta de Vendedor */}
        <Link to="/register-vendor" className="group">
          <div className="w-64 h-48 bg-green-500 text-white flex flex-col justify-center items-center rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-green-600">
            <span className="text-2xl font-semibold">Vendedor</span>
            <p className="text-center text-sm mt-2">
              Vende tus productos y gestiona tu microempresa
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
