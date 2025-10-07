import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavBarClient = () => {
  const [open, setOpen] = useState(false);

  // 🔹 Cierra el menú móvil al seleccionar una opción
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      {/* 🔹 Menú en escritorio (barra lateral fija debajo del header) */}
      <div className="hidden md:flex absolutetop-[105px] left-0 w-64 h-[calc(100vh-105px)] bg-black text-white flex-col p-6 space-y-4 z-40">
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

      {/* 🔹 Menú móvil (barra roja fija arriba, debajo del header) */}
      <div className="md:hidden absolute top-[75px] left-0 w-full bg-red-500 flex items-center justify-between p-4 z-50 shadow-lg">
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl text-white focus:outline-none"
        >
          {open ? " X" : "☰"}
        </button>
        <h2 className="text-xl font-bold text-white">Objetivos</h2>
      </div>

      {/* 🔹 Sidebar móvil (también fijo debajo de la barra roja) */}
      <div
        className={`md:hidden absolute top-[138px] left-0 h-full w-64 bg-black text-white flex flex-col p-6 space-y-4 z-40 shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-lg font-bold border-b border-gray-600 pb-2">
          Objetivos
        </h2>

        <NavLink
          to="/dañomuscular"
          onClick={handleLinkClick}
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
          onClick={handleLinkClick}
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
          onClick={handleLinkClick}
          className={({ isActive }) =>
            `block px-4 py-2 rounded hover:bg-red-600 transition ${
              isActive ? "bg-red-700" : ""
            }`
          }
        >
          Estrés Metabólico
        </NavLink>
      </div>
    </>
  );
};

export default NavBarClient;
