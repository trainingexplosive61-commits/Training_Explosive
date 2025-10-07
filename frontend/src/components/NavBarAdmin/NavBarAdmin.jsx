import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // 👈 iconos hamburguesa
import logo from "../../assets/logo.jpeg";

const NavBarAdmin = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 🔹 Barra lateral fija en escritorio */}
      <div className="hidden md:flex md:w-64 md:h-screen bg-black text-white flex-col p-6 space-y-4">
        <h2 className="text-lg font-bold border-b border-gray-600 pb-2 flex items-center justify-between">
          Administración{" "}
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
        </h2>

        <NavLink
          to="/user"
          className={({ isActive }) =>
            `block px-4 py-2 rounded hover:bg-red-600 transition ${
              isActive ? "bg-red-700" : ""
            }`
          }
        >
          Usuarios
        </NavLink>

        <NavLink
          to="/routines"
          className={({ isActive }) =>
            `block px-4 py-2 rounded hover:bg-red-600 transition ${
              isActive ? "bg-red-700" : ""
            }`
          }
        >
          Rutinas
        </NavLink>

        <NavLink
          to="/subirvideos"
          className={({ isActive }) =>
            `block px-4 py-2 rounded hover:bg-red-600 transition ${
              isActive ? "bg-red-700" : ""
            }`
          }
        >
          Subir Videos
        </NavLink>

        <NavLink
          to="/vervideos"
          className={({ isActive }) =>
            `block px-4 py-2 rounded hover:bg-red-600 transition ${
              isActive ? "bg-red-700" : ""
            }`
          }
        >
          Ver Videos
        </NavLink>
      </div>

      {/* 🔹 Navbar móvil */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-black text-white flex items-center justify-between p-4 shadow-lg z-50">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
          Administración
        </h2>

        {/* Botón hamburguesa */}
        <button onClick={() => setOpen(!open)} className="focus:outline-none">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 🔹 Menú desplegable móvil */}
      {open && (
        <div className="md:hidden fixed top-16 left-0 w-3/4 h-full bg-black text-white flex flex-col p-6 space-y-4 shadow-lg z-40 transition-all">
          <NavLink
            to="/user"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-red-600 transition ${
                isActive ? "bg-red-700" : ""
              }`
            }
          >
            Usuarios
          </NavLink>

          <NavLink
            to="/routines"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-red-600 transition ${
                isActive ? "bg-red-700" : ""
              }`
            }
          >
            Rutinas
          </NavLink>

          <NavLink
            to="/subirvideos"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-red-600 transition ${
                isActive ? "bg-red-700" : ""
              }`
            }
          >
            Subir Videos
          </NavLink>

          <NavLink
            to="/vervideos"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-red-600 transition ${
                isActive ? "bg-red-700" : ""
              }`
            }
          >
            Ver Videos
          </NavLink>
        </div>
      )}
    </>
  );
};

export default NavBarAdmin;
