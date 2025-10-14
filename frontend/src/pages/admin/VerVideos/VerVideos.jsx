import React, { useState, useMemo } from "react";
import Swal from "sweetalert2"; // ✅ Importamos SweetAlert2

// === DATOS DE VIDEOS ===
const datosVideos = [
  // === TREN SUPERIOR ===
  { id: 1, zona: "Tren Superior", parte: "Pecho", nombre: "Press de banca", descripcion: "Empuje con barra para pectorales.", url: "https://www.youtube.com/embed/jIyBCfCyVZU", estado: "Activo" },
  { id: 2, zona: "Tren Superior", parte: "Espalda", nombre: "Dominadas", descripcion: "Ejercicio de tracción para dorsales.", url: "https://www.youtube.com/embed/3J8b2m0VnQk", estado: "Activo" },
  { id: 3, zona: "Tren Superior", parte: "Bíceps", nombre: "Curl con mancuernas", descripcion: "Aislamiento de bíceps.", url: "https://www.youtube.com/embed/av7-8igSXTs", estado: "Activo" },
  { id: 4, zona: "Tren Superior", parte: "Tríceps", nombre: "Fondos en paralelas", descripcion: "Fuerza para tríceps y pecho.", url: "https://www.youtube.com/embed/6kALZikXxLc", estado: "Inactivo" },
  { id: 5, zona: "Tren Superior", parte: "Hombros", nombre: "Press militar", descripcion: "Desarrollo del deltoide.", url: "https://www.youtube.com/embed/2yjwXTZQDDI", estado: "Activo" },
  { id: 6, zona: "Tren Superior", parte: "Antebrazos", nombre: "Curl de muñeca", descripcion: "Fortalecimiento del antebrazo.", url: "https://www.youtube.com/embed/vx3E3DgG3pE", estado: "Activo" },

  // === TREN INFERIOR ===
  { id: 7, zona: "Tren Inferior", parte: "Cuádriceps", nombre: "Sentadilla", descripcion: "Trabajo completo de piernas.", url: "https://www.youtube.com/embed/1uDiW5--rAE", estado: "Activo" },
  { id: 8, zona: "Tren Inferior", parte: "Femoral", nombre: "Peso muerto rumano", descripcion: "Enfoque en femorales y glúteos.", url: "https://www.youtube.com/embed/2SHsk9AzdjA", estado: "Activo" },
  { id: 9, zona: "Tren Inferior", parte: "Glúteos", nombre: "Hip Thrust", descripcion: "Aislamiento de glúteos.", url: "https://www.youtube.com/embed/4P3hQ7lZ8qM", estado: "Activo" },
  { id: 10, zona: "Tren Inferior", parte: "Pantorrillas", nombre: "Elevación de talones", descripcion: "Trabajo para gemelos.", url: "https://www.youtube.com/embed/Z6c2qF3wXfE", estado: "Activo" },
  { id: 11, zona: "Tren Inferior", parte: "Abductores", nombre: "Apertura de piernas con banda", descripcion: "Fortalecimiento de abductores.", url: "https://www.youtube.com/embed/8vQrxzGMejM", estado: "Activo" },
 

  // === ABDOMEN ===
  { id: 13, zona: "Abdomen", parte: "Abdomen", nombre: "Crunch", descripcion: "Abdominales básicos.", url: "https://www.youtube.com/embed/2pQkC9o5H0s", estado: "Activo" },
  { id: 14, zona: "Abdomen", parte: "Abdomen", nombre: "Plancha", descripcion: "Trabajo completo de core.", url: "https://www.youtube.com/embed/pSHjTRCQxIw", estado: "Activo" },

  // === FUNCIONAL ===
  { id: 15, zona: "Funcional", parte: "Funcional", nombre: "Burpees", descripcion: "Ejercicio funcional completo.", url: "https://www.youtube.com/embed/TU8QYVW0gDU", estado: "Activo" },
  { id: 16, zona: "Funcional", parte: "Funcional", nombre: "Saltos pliométricos", descripcion: "Ejercicio de potencia funcional.", url: "https://www.youtube.com/embed/Hv3m1l8Vx1g", estado: "Activo" },
];

const partesPorZona = {
  "Tren Superior": ["Todos", "Pecho", "Espalda", "Bíceps", "Tríceps", "Hombros", "Antebrazos"],
  "Tren Inferior": ["Todos", "Cuádriceps", "Femoral", "Glúteos", "Pantorrillas", "Abductores",],
  Abdomen: ["Todos", "Abdomen"],
  Funcional: ["Todos", "Funcional"],
};

const VerVideos = () => {
  const [videos, setVideos] = useState(datosVideos);
  const [filtroZona, setFiltroZona] = useState("Todos");
  const [filtroParte, setFiltroParte] = useState("Todos");
  const [filtroEstado, setFiltroEstado] = useState("Todos");
  const [editandoId, setEditandoId] = useState(null);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevaDescripcion, setNuevaDescripcion] = useState("");

  const handleEditar = (id, nombreActual, descripcionActual) => {
    setEditandoId(id);
    setNuevoNombre(nombreActual);
    setNuevaDescripcion(descripcionActual);
  };

  // ✅ Al guardar cambios, mostramos SweetAlert2 de éxito
  const handleGuardar = (id) => {
    setVideos(
      videos.map((v) =>
        v.id === id ? { ...v, nombre: nuevoNombre, descripcion: nuevaDescripcion } : v
      )
    );
    setEditandoId(null);
    setNuevoNombre("");
    setNuevaDescripcion("");

    Swal.fire({
      icon: "success",
      title: "Cambios guardados",
      text: "El video fue actualizado correctamente.",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  // ✅ Confirmamos activación/inactivación con SweetAlert2
  const handleEstado = (id, nuevoEstado) => {
    const accion = nuevoEstado === "Activo" ? "activar" : "inactivar";
    Swal.fire({
      title: `¿Deseas ${accion} este video?`,
      text: "Podrás cambiarlo nuevamente cuando quieras.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, continuar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setVideos(videos.map((v) => (v.id === id ? { ...v, estado: nuevoEstado } : v)));
        Swal.fire({
          icon: "success",
          title: `Video ${nuevoEstado.toLowerCase()}`,
          text: "El estado fue actualizado correctamente.",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  // ✅ Eliminación con confirmación
  const handleEliminar = (id) => {
    Swal.fire({
      title: "¿Seguro que deseas eliminar este video?",
      text: "No podrás recuperarlo luego.",
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setVideos(videos.filter((v) => v.id !== id));
        Swal.fire({
          icon: "success",
          title: "Eliminado",
          text: "El video fue eliminado exitosamente.",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  const seleccionarZona = (zona) => {
    setFiltroZona(zona);
    setFiltroParte("Todos");
  };

  const videosFiltrados = useMemo(() => {
    return videos.filter((v) => {
      const matchZona = filtroZona === "Todos" ? true : v.zona === filtroZona;
      const matchParte = filtroParte === "Todos" ? true : v.parte === filtroParte;
      const matchEstado = filtroEstado === "Todos" ? true : v.estado === filtroEstado;
      return matchZona && matchParte && matchEstado;
    });
  }, [videos, filtroZona, filtroParte, filtroEstado]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">🎥 Gestión de Videos de Entrenamiento</h2>

      {/* FILTROS */}
      <div className="mb-6">
        {/* ZONAS */}
        <div className="flex flex-wrap gap-3 mb-4">
          {["Todos", "Tren Superior", "Tren Inferior", "Abdomen", "Funcional"].map((zona) => (
            <button
              key={zona}
              onClick={() => seleccionarZona(zona)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                filtroZona === zona
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
            >
              {zona}
            </button>
          ))}
        </div>

        {/* PARTES */}
        {filtroZona !== "Todos" && (
          <div className="flex flex-wrap gap-2 mb-4">
            {partesPorZona[filtroZona].map((parte) => (
              <button
                key={parte}
                onClick={() => setFiltroParte(parte)}
                className={`px-3 py-1 rounded text-sm transition ${
                  filtroParte === parte
                    ? "bg-red-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {parte}
              </button>
            ))}
          </div>
        )}

        {/* ESTADO */}
        <div className="flex flex-wrap gap-3">
          {["Todos", "Activo", "Inactivo"].map((estado) => (
            <button
              key={estado}
              onClick={() => setFiltroEstado(estado)}
              className={`px-3 py-1 rounded text-sm font-medium transition ${
                filtroEstado === estado
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              {estado}
            </button>
          ))}
        </div>
      </div>

      {/* LISTA VIDEOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videosFiltrados.map((video) => (
          <div
            key={video.id}
            className={`rounded-lg shadow p-4 flex flex-col ${
              video.estado === "Inactivo" ? "bg-gray-50" : "bg-white"
            }`}
          >
            <div className="w-full aspect-video mb-3">
              <iframe
                src={video.url}
                title={video.nombre}
                className="w-full h-44 rounded object-cover"
                allowFullScreen
              />
            </div>

            {editandoId === video.id ? (
              <div className="mb-3 flex flex-col gap-2">
                <input
                  type="text"
                  value={nuevoNombre}
                  onChange={(e) => setNuevoNombre(e.target.value)}
                  className="border p-2 rounded text-sm"
                />
                <input
                  type="text"
                  value={nuevaDescripcion}
                  onChange={(e) => setNuevaDescripcion(e.target.value)}
                  className="border p-2 rounded text-sm"
                />
                <div className="flex gap-2 mt-1">
                  <button
                    onClick={() => handleGuardar(video.id)}
                    className="bg-green-600 text-white px-3 py-1 rounded text-sm"
                  >
                    Guardar
                  </button>
                  <button
                    onClick={() => setEditandoId(null)}
                    className="bg-gray-300 text-gray-800 px-3 py-1 rounded text-sm"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <div className="mb-2">
                <div className="flex items-center justify-between">
                  <h3
                    className={`font-semibold text-lg ${
                      video.estado === "Inactivo" ? "text-red-500" : "text-gray-800"
                    }`}
                  >
                    {video.nombre}
                  </h3>
                  <span className="text-xs text-gray-400">
                    {video.zona} / {video.parte}
                  </span>
                </div>
                <p
                  className={`text-sm mt-1 ${
                    video.estado === "Inactivo" ? "text-red-400" : "text-gray-600"
                  }`}
                >
                  {video.descripcion}
                </p>
                <div className="flex justify-end gap-2 mt-2">
                  <button
                    onClick={() => handleEditar(video.id, video.nombre, video.descripcion)}
                    className="bg-blue-600 text-white px-3 py-1 rounded text-xs"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleEliminar(video.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded text-xs"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            )}

            <div className="mt-auto flex justify-between items-center">
              <span
                className={`px-2 py-1 rounded text-xs font-medium ${
                  video.estado === "Activo"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {video.estado}
              </span>
              {video.estado === "Activo" ? (
                <button
                  onClick={() => handleEstado(video.id, "Inactivo")}
                  className="bg-red-600 text-white px-3 py-1 rounded text-xs"
                >
                  Inactivar
                </button>
              ) : (
                <button
                  onClick={() => handleEstado(video.id, "Activo")}
                  className="bg-green-600 text-white px-3 py-1 rounded text-xs"
                >
                  Activar
                </button>
              )}
            </div>
          </div>
        ))}

        {videosFiltrados.length === 0 && (
          <div className="col-span-full text-center text-gray-500 py-8">
            No hay videos para la selección actual.
          </div>
        )}
      </div>
    </div>
  );
};

export default VerVideos;
