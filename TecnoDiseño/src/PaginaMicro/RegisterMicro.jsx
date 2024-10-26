// src/RegisterMicro.jsx
import React, { useState } from "react";
import video1 from "./videos/video1.mp4"; // Importa el video desde la ruta relativa

export default function RegisterMicro() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // Simulación de carga
  };

  return (
    <section className="relative h-screen flex items-center justify-center">
      
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={video1} // Utiliza la variable importada para el video
        autoPlay
        loop
        muted
      />

      {/* Capa para oscurecer el video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      {/* Contenedor Principal con fondo gris claro */}
      <div className="flex max-w-5xl bg-gray-200 bg-opacity-90 rounded-lg shadow-lg overflow-hidden w-full z-20 gap-8">
        
        {/* Lado izquierdo - Texto e Imagen con animación */}
        <div className="w-1/2 p-8 bg-black text-white flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Bienvenido a TecnoShop</h2>
          <p className="text-lg mb-6 text-center">
            Regístrate para acceder a las herramientas personalizadas y gestionar tu microempresa de forma eficiente.
          </p>
          <img 
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" 
            alt="TecnoShop logo" 
            className="w-40 h-40"
          />
        </div>

        {/* Lado derecho - Formulario de Registro */}
        <div className="w-1/2 p-8">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
            TecnoShop
          </h1>
          <h3 className="text-lg font-medium text-center text-gray-600 mb-6">
            Crea tu cuenta Ahora
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Ingresar nombre de tu micro empresa"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 placeholder-gray-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Ingresar correo"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 placeholder-gray-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Ingresar contraseña"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 placeholder-gray-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Confirmar contraseña"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 placeholder-gray-500"
              />
            </div>

            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="mr-2 cursor-pointer"
                required
              />
              <label htmlFor="terms" className="text-gray-600">
                Yo acepto los{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Términos y condiciones
                </a>
              </label>
            </div>

            <div className="mb-6 text-center">
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-black text-white py-3 rounded-lg font-semibold transition duration-150 ease-in-out ${
                  loading ? "cursor-not-allowed" : "hover:bg-gray-800"
                }`}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white inline"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="white"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        fill="white"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    Procesando...
                  </>
                ) : (
                  "Crear cuenta"
                )}
              </button>
            </div>

            <div className="text-center text-gray-600">
              ¿Ya tienes cuenta?{" "}
              <a href="/" className="text-black font-semibold hover:underline">
                Inicia sesión ahora
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
