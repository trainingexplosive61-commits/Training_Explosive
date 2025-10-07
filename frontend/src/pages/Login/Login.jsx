import React, { useState } from "react";
import fondo from "../../assets/fondologin.jpeg";

// 🔹 Input reutilizable
const InputField = ({ label, type, name, value, onChange }) => (
  <div className="flex flex-col w-full mb-4">
    <label
      htmlFor={name}
      className="mb-1 text-gray-800 font-semibold tracking-wide"
    >
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none shadow-sm"
    />
  </div>
);

const Login = () => {
  // Estado controlado
  const [formData, setFormData] = useState({ email: "", password: "" });

  // Manejo de cambios en inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejo del submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Respuesta backend:", data);

      if (response.ok) {
        alert("Login exitoso ✅");
        // 🔹 Aquí podrías guardar el token en localStorage y redirigir
      } else {
        alert(data.message || "Error en el login ");
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      alert("No se pudo conectar al servidor");
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Header fijo */}
     

      {/* Fondo con imagen */}
      <div className="flex flex-1 justify-center items-center relative">
        <img
          src={fondo}
          alt="background"
          className="absolute top-0 left-0 w-full h-full -z-10 object-cover"
        />

        {/* Contenedor Formulario */}
        <div className="bg-white/95 p-8 rounded-2xl shadow-2xl w-11/12 max-w-md backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-red-600 text-center mb-6 drop-shadow">
            INICIAR SESIÓN
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col">
            <InputField
              label="Correo Electrónico"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <InputField
              label="Contraseña"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-red-700 transition-transform transform hover:scale-105 shadow-md"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
