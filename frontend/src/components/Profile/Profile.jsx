import React from 'react'

const Profile = () => {
    return (
        <div className="absolute top-full right-0 bg-white text-black px-6 py-4 rounded shadow-lg z-50 w-64">
            <h2 className="text-lg font-bold mb-2">Perfil de usuario</h2>
            <p className="mb-1">Nombre: Juan Pérez</p>
            <p className="mb-3">Correo: juan@mail.com</p>
            <button className="bg-red-500 text-black  px-4 py-2 rounded hover:bg-red-600 w-full hover:scale-101 transform transition-transform duration-300">
                Cerrar sesión
            </button>
        </div>
    )
}

export default Profile
