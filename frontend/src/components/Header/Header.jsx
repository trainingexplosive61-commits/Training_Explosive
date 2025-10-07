import React, { useState } from 'react'
import logo from '../../assets/logo.jpeg'
import Profile from '../Profile/Profile'

const Header = () => {
  const [mostrarProfile, setMostrarProfile] = useState(false);

  return (
    <header className="bg-red-500 text-white p-4 flex items-center place-content-between relative">
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-22 h-22 mr-2 rounded-full"
        />
      </div>
      <h1 className="text-2xl font-bold">Entrenamiento Personalizado</h1>
      <div className="relative">
        <svg
          className="w-15 h-15 ml-4 cursor-pointer"
          fill="none"
          strokeWidth="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          onClick={() => setMostrarProfile(!mostrarProfile)}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
        </svg>
        {mostrarProfile && (
          <Profile />
        )}
      </div>
    </header>
  )
}

export default Header