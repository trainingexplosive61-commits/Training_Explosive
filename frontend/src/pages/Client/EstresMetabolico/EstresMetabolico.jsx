import React, { useState } from "react";

const data = {
  rango: "15 a 20 repeticiones con descansos cortos y enfoque en congestión muscular.",
  zonas: {
    "Tren Superior": {
      músculos: {
        Pecho: ["Flexiones al fallo (Aquí irá un video)", "Cruces en polea (Aquí irá un video)"],
        Espalda: ["Jalón en polea alta (Aquí irá un video)", "Remo con mancuerna (Aquí irá un video)"],
        Hombros: ["Elevaciones laterales altas repeticiones (Aquí irá un video)"],
        Bíceps: ["Curl 21s (Aquí irá un video)", "Curl en predicador (Aquí irá un video)"],
        Tríceps: ["Extensiones en cuerda altas repeticiones (Aquí irá un video)"],
      },
    },
    "Tren Inferior": {
      músculos: {
        Cuádriceps: ["Sentadilla búlgara (Aquí irá un video)", "Prensa ligera con altas repeticiones (Aquí irá un video)"],
        Femoral: ["Curl femoral en máquina (Aquí irá un video)"],
        Glúteos: ["Puente de glúteo (Aquí irá un video)"],
        Pantorrillas: ["Elevaciones rápidas al fallo (Aquí irá un video)"],
      },
    },
    Funcional: {
      músculos: {
        Core: ["Burpees (Aquí irá un video)", "Mountain climbers (Aquí irá un video)"],
      },
    },
    Abdomen: {
      músculos: {
        Abdominales: ["Crunch en bicicleta (Aquí irá un video)", "Abdominales en V (Aquí irá un video)"],
      },
    },
  },
};

const EstresMetabolico = () => {
  const [zona, setZona] = useState(null);
  const [musculo, setMusculo] = useState(null);

  return (
    <div className="flex-1 p-10 bg-white overflow-y-auto">
      <h1 className="text-3xl font-bold mb-2">Estrés Metabólico</h1>
      <p className="mb-4">
        Rango de repeticiones recomendado:{" "}
        <span className="font-semibold">{data.rango}</span>
      </p>

      <h2 className="text-xl font-semibold mb-2">Selecciona una zona:</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.keys(data.zonas).map((z) => (
          <button
            key={z}
            className={`px-4 py-2 rounded ${zona === z ? "bg-red-600 text-white" : "bg-gray-300"}`}
            onClick={() => {
              setZona(z);
              setMusculo(null);
            }}
          >
            {z}
          </button>
        ))}
      </div>

      {zona && (
        <>
          <h2 className="text-xl font-semibold mb-2">Músculos disponibles:</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {Object.keys(data.zonas[zona].músculos).map((m) => (
              <button
                key={m}
                className={`px-4 py-2 rounded ${musculo === m ? "bg-red-600 text-white" : "bg-gray-300"}`}
                onClick={() => setMusculo(m)}
              >
                {m}
              </button>
            ))}
          </div>
        </>
      )}

      {musculo && (
        <>
          <h2 className="text-xl font-semibold mb-2">Ejercicios para {musculo}:</h2>
          <ul className="list-disc pl-5 space-y-2">
            {data.zonas[zona].músculos[musculo].map((ejercicio, index) => (
              <li key={index} className="p-2 bg-gray-100 rounded">
                {ejercicio}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default EstresMetabolico;
