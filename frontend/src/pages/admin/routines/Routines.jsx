import React, { useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

function Routines() {
  const [rutinas, setRutinas] = useState([
    { id: 1, objetivo: "Daño Muscular", repeticiones: "8-12" },
    { id: 2, objetivo: "Fuerza", repeticiones: "4-6" },
  ]);

  const [nuevaRutina, setNuevaRutina] = useState({
    objetivo: "",
    repeticiones: "",
  });

  // ✅ Manejo de inputs
  const handleChange = (e) => {
    setNuevaRutina({ ...nuevaRutina, [e.target.name]: e.target.value });
  };

  // ✅ Crear nueva rutina con SweetAlert
  const handleSubmit = (e) => {
    e.preventDefault();

    const nueva = { ...nuevaRutina, id: rutinas.length + 1 };
    setRutinas([...rutinas, nueva]);

    Swal.fire({
      icon: "success",
      title: "Rutina creada",
      text: `Objetivo: ${nueva.objetivo} — Repeticiones: ${nueva.repeticiones}`,
      confirmButtonColor: "#2563eb",
    });

    setNuevaRutina({ objetivo: "", repeticiones: "" });
  };

  // ✅ Eliminar rutina con confirmación
  const eliminarRutina = (id) => {
    const rutina = rutinas.find((r) => r.id === id);

    Swal.fire({
      title: `¿Eliminar la rutina de ${rutina.objetivo}?`,
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#dc2626",
    }).then((result) => {
      if (result.isConfirmed) {
        setRutinas(rutinas.filter((r) => r.id !== id));
        Swal.fire({
          icon: "success",
          title: "Eliminada",
          text: "La rutina fue eliminada correctamente.",
          confirmButtonColor: "#2563eb",
        });
      }
    });
  };

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Rutinas</h2>

      {/* FORMULARIO */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow space-y-4 mb-6"
      >
        <select
          name="objetivo"
          value={nuevaRutina.objetivo}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Selecciona un objetivo</option>
          <option value="Fuerza">Fuerza</option>
          <option value="Estrés Metabólico">Estrés Metabólico</option>
          <option value="Daño Muscular">Daño Muscular</option>
        </select>

        <input
          type="text"
          name="repeticiones"
          placeholder="Cantidad de repeticiones (ej: 8-12)"
          value={nuevaRutina.repeticiones}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
        >
          ➕ Crear Rutina
        </button>
      </form>

      {/* LISTA */}
      <ul className="space-y-3">
        {rutinas.map((r) => (
          <li
            key={r.id}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
          >
            <div>
              <p className="font-bold text-gray-800">
                Objetivo: {r.objetivo}
              </p>
              <p className="text-gray-600">
                Repeticiones: {r.repeticiones}
              </p>
            </div>
            <button
              onClick={() => eliminarRutina(r.id)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500"
            >
              ❌ Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Routines;
