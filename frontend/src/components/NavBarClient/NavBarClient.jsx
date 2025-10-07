import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavBarClient = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 🔹 Menú en escritorio (barra lateral fija) */}
      <div className="hidden md:flex md:w-64 md:h-screen bg-black text-white flex-col p-6 space-y-4 mt-16">
        <h2 className="text-lg font-bold border-b border-gray-600 pb-2">
          Objetivos
        </h2>

        <NavLink
          to="/dañomuscular"
          className={({ isActive }) =>
            `block px-4 py-2 rounded hover:bg-red-600 transition ${
              isActive ? "bg-red-700" : ""
            }`
          }
        >
          Daño Muscular
        </NavLink>

        <NavLink
          to="/fuerza"
          className={({ isActive }) =>
            `block px-4 py-2 rounded hover:bg-red-600 transition ${
              isActive ? "bg-red-700" : ""
            }`
          }
        >
          Fuerza
        </NavLink>

        <NavLink
          to="/estresmetabolico"
          className={({ isActive }) =>
            `block px-4 py-2 rounded hover:bg-red-600 transition ${
              isActive ? "bg-red-700" : ""
            }`
          }
        >
          Estrés Metabólico
        </NavLink>
      </div>

      {/* 🔹 Menú móvil (sidebar con hamburguesa) */}
      <div className="md:hidden fixed  left-0 w-full bg-black-600 flex items-center justify-between p-4 z-50 ">
        {/* Botón hamburguesa */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-white focus:outline-none "
        >
          {open ? "X" : "☰"}
        </button>
        <h2 className="text-lg font-bold"></h2>
      </div>

      {/* Sidebar móvil */}
      {open && (
        
        <div className="md:hidden fixed left-0 w-64 h-full bg-black text-white flex flex-col p-6 space-y-4 z-40 shadow-lg">
          <h2 className="text-lg font-bold border-b border-gray-600 pb-2">
            Objetivos
          </h2>

          <NavLink
            to="/dañomuscular"
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-red-600 transition ${
                isActive ? "bg-red-700" : ""
              }`
            }
          >
            Daño Muscular
          </NavLink>

          <NavLink
            to="/fuerza"
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-red-600 transition ${
                isActive ? "bg-red-700" : ""
              }`
            }
          >
            Fuerza
          </NavLink>

          <NavLink
            to="/estresmetabolico"
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-red-600 transition ${
                isActive ? "bg-red-700" : ""
              }`
            }
          >
            Estrés Metabólico
          </NavLink>
        </div>
      )}
    </>
  );
};

export default NavBarClient;
