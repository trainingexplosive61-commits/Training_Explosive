import React, { useState } from "react";

function SubirVideos() {
  const [zona, setZona] = useState("");
  const [parte, setParte] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const opciones = {
    "Tren Superior": ["Pecho", "Espalda", "Hombros", "Bíceps", "Tríceps"],
    "Tren Inferior": ["Cuádriceps", "Femoral", "Glúteos", "Pantorrillas"],
    Funcional: ["Movilidad", "Resistencia", "Potencia"],
    Abdomen: [
      "Abdominales Superiores",
      "Abdominales Inferiores",
      "Oblicuos",
      "Core",
    ],
  };

  // 🔹 Subir video a Cloudinary (con tu nueva cuenta)
  const handleUploadVideo = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    setVideoUrl("");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "video_ejercicio"); // tu nuevo preset
    // No incluir claves API ni secretos

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dshkhusxd/video/upload", // tu cloud name actualizado
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (data.secure_url) {
        setVideoUrl(data.secure_url);
      } else {
        alert("❌ Error al subir el video. Verifica tu preset o Cloud Name.");
      }
    } catch (error) {
      console.error("Error al subir el video:", error);
      alert("Ocurrió un error al subir el video.");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Enviar datos (ejemplo: simula envío al backend)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!videoUrl) {
      alert("Primero sube un video antes de enviar.");
      return;
    }

    const datos = {
      titulo: e.target.titulo.value,
      descripcion: e.target.descripcion.value,
      zona,
      parte,
      videoUrl,
    };

    console.log("Datos listos para enviar al backend:", datos);
    alert("✅ Video subido y datos listos para enviar al backend.");
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 mt-4">
        Gestión de Videos
      </h2>

      <form
        className="bg-white p-6 rounded-xl shadow-lg space-y-4"
        onSubmit={handleSubmit}
      >
        {/* Título */}
        <input
          type="text"
          name="titulo"
          placeholder="Título del video"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />

        {/* Descripción */}
        <input
          type="text"
          name="descripcion"
          placeholder="Descripción del video"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />

        {/* Subir archivo */}
        <div>
          <input
            type="file"
            accept="video/*"
            onChange={handleUploadVideo}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {loading && (
            <p className="text-blue-500 mt-2 animate-pulse">Subiendo video...</p>
          )}

          {videoUrl && (
            <div className="mt-3">
              <p className="text-green-600 font-semibold">
                ✅ Video subido correctamente
              </p>
              <video
                src={videoUrl}
                controls
                className="rounded-lg mt-2 w-full shadow"
              ></video>
              <p className="text-gray-500 text-sm mt-2 break-all">
                URL: {videoUrl}
              </p>
            </div>
          )}
        </div>

        {/* Zona */}
        <select
          value={zona}
          onChange={(e) => {
            setZona(e.target.value);
            setParte("");
          }}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        >
          <option value="">Selecciona la zona del cuerpo</option>
          {Object.keys(opciones).map((zonaKey) => (
            <option key={zonaKey} value={zonaKey}>
              {zonaKey}
            </option>
          ))}
        </select>

        {/* Parte del cuerpo */}
        {zona && (
          <select
            value={parte}
            onChange={(e) => setParte(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          >
            <option value="">Selecciona la parte del cuerpo</option>
            {opciones[zona].map((parte) => (
              <option key={parte} value={parte}>
                {parte}
              </option>
            ))}
          </select>
        )}

        {/* Botón final */}
        <button
          type="submit"
          className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition"
        >
          ⬆️ Subir Video
        </button>
      </form>
    </div>
  );
}

export default SubirVideos;
