import React, { useState } from "react";

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

  // ✅ Crear nueva rutina
  const handleSubmit = (e) => {
    e.preventDefault();

    // 🟢 Aquí irá el backend (POST /routines)
    const nueva = { ...nuevaRutina, id: rutinas.length + 1 };
    setRutinas([...rutinas, nueva]);

    setNuevaRutina({ objetivo: "", repeticiones: "" }); // limpiar
  };

  // ✅ Eliminar rutina
  const eliminarRutina = (id) => {
    // 🟢 Aquí irá el backend (DELETE /routines/:id)
    setRutinas(rutinas.filter((r) => r.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Rutinas</h2>

      {/* FORMULARIO */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow space-y-4 mb-6"
      >
        <select
          name="objetivo"
          value={nuevaRutina.objetivo}
          onChange={handleChange}
          className="w-full p-2 border rounded"
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
          className="w-full p-2 border rounded"
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
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <p className="font-bold">Objetivo: {r.objetivo}</p>
              <p className="text-gray-600">Repeticiones: {r.repeticiones}</p>
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
