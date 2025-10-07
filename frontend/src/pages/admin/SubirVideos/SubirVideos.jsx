import React, { useState } from "react";

function SubirVideos() {
  const [zona, setZona] = useState("");
  const [parte, setParte] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const opciones = {
    "Tren Superior": ["Pecho", "Espalda", "Hombros", "Bíceps", "Tríceps"],
    "Tren Inferior": ["Cuádriceps", "Femoral", "Glúteos", "Pantorrillas"],
    "Funcional": ["Movilidad", "Resistencia", "Potencia"],
    "Abdomen": [
      "Abdominales Superiores",
      "Abdominales Inferiores",
      "Oblicuos",
      "Core",
    ],
  };

  // Función para subir video a Cloudinary
  const handleUploadVideo = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    setVideoUrl("");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "video_unsigned"); // tu preset sin firmar
    formData.append("resource_type", "video");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dz8vfcha2/video/upload", // tu cloud name aquí
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      if (data.secure_url) {
        setVideoUrl(data.secure_url);
      } else {
        alert("Error al subir el video.");
      }
    } catch (error) {
      console.error("Error al subir el video:", error);
      alert("Ocurrió un error al subir el video.");
    } finally {
      setLoading(false);
    }
  };

  // Simulación de envío final
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!videoUrl) {
      alert("Primero sube un video antes de enviar.");
      return;
    }

    console.log({
      titulo: e.target[0].value,
      descripcion: e.target[1].value,
      zona,
      parte,
      videoUrl,
    });

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
          placeholder="Título del video"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />

        <input
          type="text"
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

          {loading && <p className="text-blue-500 mt-2">Subiendo video...</p>}
          {videoUrl && (
            <div className="mt-3">
              <p className="text-green-600">✅ Video subido correctamente</p>
              <video
                src={videoUrl}
                width="100%"
                height="240"
                controls
                className="rounded-lg mt-2"
              ></video>
            </div>
          )}
        </div>

        {/* Selección de zona */}
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

        {/* Selección de parte específica */}
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

        {/* Botón subir */}
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
