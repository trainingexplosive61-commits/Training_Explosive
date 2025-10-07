import React, { useState } from "react";

const data = {
  rango: "4 a 6 repeticiones con cargas altas y largos tiempos de descanso.",
  zonas: {
    "Tren Superior": {
      músculos: {
        Pecho: ["Press de banca pesado (Aquí irá un video)", "Press inclinado con barra (Aquí irá un video)"],
        Espalda: ["Dominadas con peso (Aquí irá un video)", "Remo con barra pesado (Aquí irá un video)"],
        Hombros: ["Press militar con barra (Aquí irá un video)"],
        Bíceps: ["Curl con barra pesado (Aquí irá un video)"],
        Tríceps: ["Press cerrado en banca (Aquí irá un video)"],
      },
    },
    "Tren Inferior": {
      músculos: {
        Cuádriceps: ["Sentadilla trasera (Aquí irá un video)", "Prensa de pierna pesada (Aquí irá un video)"],
        Femoral: ["Peso muerto convencional (Aquí irá un video)", "Peso muerto rumano (Aquí irá un video)"],
        Glúteos: ["Hip Thrust con carga (Aquí irá un video)"],
        Pantorrillas: ["Elevaciones de talón con barra (Aquí irá un video)"],
      },
    },
    Funcional: {
      músculos: {
        Core: ["Farmer Walk (Aquí irá un video)", "Levantamiento turco (Aquí irá un video)"],
      },
    },
    Abdomen: {
      músculos: {
        Abdominales: ["Plancha con peso (Aquí irá un video)", "Rueda abdominal (Aquí irá un video)"],
      },
    },
  },
};

const Fuerza = () => {
  const [zona, setZona] = useState(null);
  const [musculo, setMusculo] = useState(null);

  return (
    <div className="flex-1 p-10 bg-white overflow-y-auto">
      <h1 className="text-3xl font-bold mb-2">Fuerza</h1>
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

export default Fuerza;
