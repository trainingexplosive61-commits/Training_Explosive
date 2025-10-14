import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 🔹 Aquí podrías limpiar datos del usuario si lo deseas:
    // localStorage.removeItem("token");
    // localStorage.removeItem("user");

    navigate("/login"); // Redirige al componente Login
  };

  return (
    <div className="absolute top-full right-0 bg-white text-black px-6 py-4 rounded shadow-lg z-50 w-64">
      <h2 className="text-lg font-bold mb-2">Perfil de usuario</h2>
      <p className="mb-1">Nombre: Juan Pérez</p>
      <p className="mb-3">Correo: juan@mail.com</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-black px-4 py-2 rounded hover:bg-red-600 w-full hover:scale-101 transform transition-transform duration-300"
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;
