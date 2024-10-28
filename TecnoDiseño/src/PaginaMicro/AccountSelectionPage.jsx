// src/PaginaMicro/AccountSelectionPage.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function AccountSelectionPage() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-800 px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 dark:text-gray-200 mb-4">
          ¿Con qué cuenta quieres empezar?
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-400">
          Selecciona el tipo de cuenta y descubre cómo puedes crecer con TecnoShop
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        {/* Tarjeta de Beneficios para Cliente */}
        <Link to="/register-client" className="group">
          <div className="w-full bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-200 flex flex-col justify-center items-center rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-blue-500 mb-2 group-hover:text-blue-600">
              Cuenta de Cliente
            </h2>
            <p className="text-center text-md">
              Accede a productos tecnológicos exclusivos, ofertas personalizadas y compra directamente a microempresas innovadoras.
            </p>
            <ul className="mt-4 text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <li>✔ Ofertas y descuentos exclusivos</li>
              <li>✔ Envios seguros</li>
              <li>✔ Compra segura y directa</li>
            </ul>
          </div>
        </Link>

        {/* Tarjeta de Beneficios para Vendedor */}
        <Link to="/register-vendor" className="group">
          <div className="w-full bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-200 flex flex-col justify-center items-center rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-green-500 mb-2 group-hover:text-green-600">
              Cuenta de Vendedor
            </h2>
            <p className="text-center text-md">
              Vende tus productos tecnológicos, gestiona tu microempresa y amplía tu presencia en el mercado digital.
            </p>
            <ul className="mt-4 text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <li>✔ Plataforma de ventas fácil de usar</li>
              <li>✔ Herramientas de análisis y gestión</li>
              <li>✔ Acceso a una red de clientes potenciales</li>
            </ul>
          </div>
        </Link>
      </div>
    </section>
  );
}
