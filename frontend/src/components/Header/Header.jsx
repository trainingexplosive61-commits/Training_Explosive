import React, { useState } from 'react';
import logo from '../../assets/logo.jpeg';
import Profile from '../Profile/Profile';

const Header = () => {
  const [mostrarProfile, setMostrarProfile] = useState(false);

  return (
    <header className="bg-red-500 text-white px-4 py-3 flex items-center justify-between relative flex-wrap shadow-md">
      {/* 🔹 Logo */}
      <div className="flex items-center space-x-3">
        <img
          src={logo}
          alt="Logo"
          className="w-14 h-14 md:w-20 md:h-20 rounded-full object-cover"
        />
      </div>

      {/* 🔹 Título responsivo */}
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-center flex-1 md:flex-none md:text-left">
        Entrenamiento Personalizado
      </h1>

      {/* 🔹 Icono de perfil */}
      <div className="relative flex justify-end w-auto">
        <svg
          className="w-8 h-8 md:w-10 md:h-10 cursor-pointer hover:scale-110 transition-transform"
          fill="none"
          strokeWidth="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          onClick={() => setMostrarProfile(!mostrarProfile)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          ></path>
        </svg>

        {/* 🔹 Menú del perfil */}
        {mostrarProfile && (
          <div className="absolute right-0 mt-2">
            <Profile />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
