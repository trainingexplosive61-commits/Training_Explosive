import React, { useState } from 'react'

const datosVideos = [
    { id: 1, nombre: "Sentadilla", descripcion: "Bajar 90 Grados ", url: "https://www.youtube.com/watch?v=jIyBCfCyVZU", estado: "Activo" },
    { id: 2, nombre: "Press de banca", descripcion: "Empuje", url: "https://www.youtube.com/embed/2", estado: "Activo" },
    { id: 3, nombre: "Dominadas", descripcion: "Ejercicio de espalda", url: "https://www.youtube.com/embed/3", estado: "Inactivo" },
];

const VerVideos = () => {
    const [videos, setVideos] = useState(datosVideos);
    const [editandoId, setEditandoId] = useState(null);
    const [nuevoNombre, setNuevoNombre] = useState("");
    const [nuevaDescripcion, setNuevaDescripcion] = useState("");

    const handleEditar = (id, nombreActual, descripcionActual) => {
        setEditandoId(id);
        setNuevoNombre(nombreActual);
        setNuevaDescripcion(descripcionActual);
    };

    const handleGuardar = (id) => {
        setVideos(videos.map(v =>
            v.id === id ? { ...v, nombre: nuevoNombre, descripcion: nuevaDescripcion } : v
        ));
        setEditandoId(null);
        setNuevoNombre("");
        setNuevaDescripcion("");
        // BACKEND: Aquí deberías actualizar el nombre y la descripción del video en la base de datos.
    };

    const handleEstado = (id, nuevoEstado) => {
        setVideos(videos.map(v =>
            v.id === id ? { ...v, estado: nuevoEstado } : v
        ));
        // BACKEND: Aquí deberías actualizar el estado del video en la base de datos.
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Videos Disponibles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map(video => (
                    <div key={video.id} className="bg-white rounded shadow p-4 flex flex-col items-center">
                        <div className="w-full aspect-video mb-2">
                            <iframe
                                src={video.url}
                                title={video.nombre}
                                className="w-full h-40 rounded"
                                allowFullScreen
                            />
                        </div>
                        {editandoId === video.id ? (
                            <div className="w-full mb-2 flex flex-col gap-2">
                                <input
                                    type="text"
                                    value={nuevoNombre}
                                    onChange={e => setNuevoNombre(e.target.value)}
                                    className="border p-2 rounded w-full mb-1"
                                    placeholder="Nombre del video"
                                />
                                <input
                                    type="text"
                                    value={nuevaDescripcion}
                                    onChange={e => setNuevaDescripcion(e.target.value)}
                                    className="border p-2 rounded w-full mb-1"
                                    placeholder="Descripción"
                                />
                                <div className="flex gap-2">
                                    <button
                                        className="bg-green-600 text-white px-3 py-2 rounded"
                                        onClick={() => handleGuardar(video.id)}
                                    >
                                        Guardar
                                    </button>
                                    <button
                                        className="bg-gray-400 text-white px-3 py-2 rounded"
                                        onClick={() => setEditandoId(null)}
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="w-full flex flex-col mb-2">
                                <span className={`font-semibold ${video.estado === "Inactivo" ? "text-red-500" : ""}`}>
                                    {video.nombre}
                                </span>
                                <span className={`text-sm ${video.estado === "Inactivo" ? "text-red-400" : "text-gray-600"}`}>
                                    {video.descripcion}
                                </span>
                                <div className="flex justify-end mt-1">
                                    <button
                                        className="bg-blue-600 text-white px-3 py-1 rounded text-xs"
                                        onClick={() => handleEditar(video.id, video.nombre, video.descripcion)}
                                    >
                                        Editar
                                    </button>
                                </div>
                            </div>
                        )}
                        <div className="w-full flex justify-between">
                            {video.estado === "Activo" ? (
                                <button
                                    className="bg-red-600 text-white px-4 py-1 rounded text-xs"
                                    onClick={() => handleEstado(video.id, "Inactivo")}
                                >
                                    Inactivar
                                </button>
                            ) : (
                                <button
                                    className="bg-green-600 text-white px-4 py-1 rounded text-xs"
                                    onClick={() => handleEstado(video.id, "Activo")}
                                >
                                    Activar
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default VerVideos
