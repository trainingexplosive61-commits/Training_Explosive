import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Users, Dumbbell, Upload, Video, LogOut } from "lucide-react";
import logo from "../../assets/logo.jpeg";

const NavBarAdmin = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      {/* 🔹 Sidebar en escritorio */}
      <div className="hidden md:flex md:w-64 md:h-screen bg-black text-white flex-col justify-between p-6 fixed top-0 left-0 z-40">
        {/* Parte superior */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold border-b border-gray-600 pb-2 flex items-center justify-between">
            Administración
            <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
          </h2>

          <NavLink
            to="/user"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded hover:bg-red-600 transition ${
                isActive ? "bg-red-700" : ""
              }`
            }
          >
            <Users size={20} /> Usuarios
          </NavLink>

          <NavLink
            to="/routines"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded hover:bg-red-600 transition ${
                isActive ? "bg-red-700" : ""
              }`
            }
          >
            <Dumbbell size={20} /> Rutinas
          </NavLink>

          <NavLink
            to="/subirvideos"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded hover:bg-red-600 transition ${
                isActive ? "bg-red-700" : ""
              }`
            }
          >
            <Upload size={20} /> Subir Videos
          </NavLink>

          <NavLink
            to="/vervideos"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded hover:bg-red-600 transition ${
                isActive ? "bg-red-700" : ""
              }`
            }
          >
            <Video size={20} /> Ver Videos
          </NavLink>
        </div>

        {/* Parte inferior - Cerrar sesión */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-2 rounded hover:bg-red-600 transition border-t border-gray-600 pt-3 mt-6"
        >
          <LogOut size={20} /> Cerrar sesión
        </button>
      </div>

      {/* 🔹 Navbar móvil */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-black text-white flex items-center justify-between p-4 shadow-lg z-50">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
          Administración
        </h2>

        <button onClick={() => setOpen(!open)} className="focus:outline-none">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 🔹 Menú móvil desplegable */}
      {open && (
        <div className="md:hidden fixed top-16 left-0 w-3/4 h-[calc(100vh-64px)] bg-black text-white flex flex-col justify-between p-6 shadow-lg z-40 transition-all duration-300">
          {/* Enlaces arriba */}
          <div className="space-y-4">
            <NavLink
              to="/user"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded hover:bg-red-600 transition ${
                  isActive ? "bg-red-700" : ""
                }`
              }
            >
              <Users size={20} /> Usuarios
            </NavLink>

            <NavLink
              to="/routines"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded hover:bg-red-600 transition ${
                  isActive ? "bg-red-700" : ""
                }`
              }
            >
              <Dumbbell size={20} /> Rutinas
            </NavLink>

            <NavLink
              to="/subirvideos"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded hover:bg-red-600 transition ${
                  isActive ? "bg-red-700" : ""
                }`
              }
            >
              <Upload size={20} /> Subir Videos
            </NavLink>

            <NavLink
              to="/vervideos"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded hover:bg-red-600 transition ${
                  isActive ? "bg-red-700" : ""
                }`
              }
            >
              <Video size={20} /> Ver Videos
            </NavLink>
          </div>

          {/* Cerrar sesión abajo */}
          <button
            onClick={() => {
              setOpen(false);
              handleLogout();
            }}
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-red-600 transition border-t border-gray-600 pt-3"
          >
            <LogOut size={20} /> Cerrar sesión
          </button>
        </div>
      )}
    </>
  );
};

export default NavBarAdmin;
