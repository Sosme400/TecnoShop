// src/LoginMicro.jsx
import React, { useState } from "react";
import { TEInput } from "tw-elements-react";
import video1 from "./videos/video1.mp4"; // Importa el video desde la ruta correcta

export default function LoginMicro() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <section className="relative h-screen flex items-center justify-center">
      
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src={video1} // Utiliza el video importado
        autoPlay
        loop
        muted
      />

      {/* Capa para oscurecer el video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>

      {/* Contenedor Principal con el formulario */}
      <div className="flex max-w-5xl bg-gray-200 bg-opacity-90 rounded-lg shadow-lg overflow-hidden w-full z-10 gap-8">
        
        {/* Lado izquierdo - Texto e Imagen con animación y fondo negro */}
        <div className="w-1/2 p-8 bg-black text-white flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Bienvenido a TecnoShop</h2>
          <p className="text-lg mb-6 text-center">
            Tu plataforma de microempresa. Ingresa para acceder a tus herramientas personalizadas y gestionar tu negocio de forma eficiente.
          </p>
          <img 
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" 
            alt="TecnoShop logo" 
            className="w-40 h-40"
          />
        </div>

        {/* Lado derecho - Formulario de Inicio de Sesión */}
        <div className="w-1/2 p-8">
          <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">TecnoShop</h1>
          <h2 className="text-lg font-medium text-center mb-6 text-gray-600">
            Iniciar sesión con cuenta de Microempresa
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Email input */}
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Correo</label>
              <input
                type="email"
                placeholder="example@domain.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black placeholder-gray-500"
              />
            </div>

            {/* Password input */}
            <div className="mb-4">
              <label className="flex justify-between text-gray-600 mb-2">
                Contraseña
                <a href="#" className="text-sm text-black hover:underline">
                  ¿Olvidaste tu contraseña?
                </a>
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black placeholder-gray-500"
                />
                <span className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-400">
                  👁️
                </span>
              </div>
            </div>

            {/* Botón de Iniciar Sesión centrado */}
            <div className="mb-6 flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className={`w-3/4 flex items-center justify-center bg-black text-white py-2 px-4 rounded-lg font-semibold transition duration-150 ease-in-out ${
                  loading ? "cursor-not-allowed" : "hover:bg-gray-800"
                }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="4" fill="none" />
                      <path fill="white" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Procesando...
                  </>
                ) : (
                  "Iniciar sesión Ahora"
                )}
              </button>
            </div>

            {/* Sign Up link */}
            <div className="text-center text-gray-600">
              ¿No tienes cuenta?{" "}
              <a href="#" className="text-black font-semibold hover:underline">
                Regístrate ahora
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
