import React, { useState } from "react";

// 📌 DATA solo para Daño Muscular
const data = {
  rango: "8 a 12 repeticiones con cargas moderadas y técnicas de aislamiento.", 
  zonas: {
    "Tren Superior": {
      músculos: {
        Pecho: ["Press de banca (Aquí irá un video)", "Aperturas con mancuernas (Aquí irá un video)"],
        Espalda: ["Remo con barra (Aquí irá un video)", "Dominadas (Aquí irá un video)"],
        Hombros: ["Press militar (Aquí irá un video)", "Elevaciones laterales (Aquí irá un video)"],
        Bíceps: ["Curl con barra (Aquí irá un video)", "Curl martillo (Aquí irá un video)"],
        Tríceps: ["Fondos en paralelas (Aquí irá un video)", "Extensión en polea (Aquí irá un video)"],
      },
    },
    "Tren Inferior": {
      músculos: {
        Cuádriceps: ["Sentadillas (Aquí irá un video)", "Prensa de piernas (Aquí irá un video)"],
        Femoral: ["Peso muerto rumano (Aquí irá un video)", "Curl femoral (Aquí irá un video)"],
        Glúteos: ["Hip thrust (Aquí irá un video)", "Zancadas (Aquí irá un video)"],
        Pantorrillas: ["Elevaciones de talones (Aquí irá un video)"],
      },
    },
    Funcional: {
      músculos: {
        Core: ["Plancha (Aquí irá un video)", "Mountain climbers (Aquí irá un video)"],
      },
    },
    Abdomen: {
      músculos: {
        Abdominales: ["Crunch (Aquí irá un video)", "Elevación de piernas (Aquí irá un video)"],
      },
    },
  },
};

const DañoMuscular = () => {
  const [zona, setZona] = useState(null);
  const [musculo, setMusculo] = useState(null);

  return (
    <div className="flex-1 p-10 bg-white overflow-y-auto">
      {/* Título */}
      <h1 className="text-3xl font-bold mb-2">Daño Muscular</h1>
      <p className="mb-4">
        Rango de repeticiones recomendado:{" "}
        <span className="font-semibold">{data.rango}</span>
      </p>

      {/* ZONAS */}
      <h2 className="text-xl font-semibold mb-2">Selecciona una zona:</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.keys(data.zonas).map((z) => (
          <button
            key={z}
            className={`px-4 py-2 rounded ${
              zona === z ? "bg-red-600 text-white" : "bg-gray-300"
            }`}
            onClick={() => {
              setZona(z);
              setMusculo(null);
            }}
          >
            {z}
          </button>
        ))}
      </div>

      {/* MÚSCULOS */}
      {zona && (
        <>
          <h2 className="text-xl font-semibold mb-2">Músculos disponibles:</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {Object.keys(data.zonas[zona].músculos).map((m) => (
              <button
                key={m}
                className={`px-4 py-2 rounded ${
                  musculo === m ? "bg-red-600 text-white" : "bg-gray-300"
                }`}
                onClick={() => setMusculo(m)}
              >
                {m}
              </button>
            ))}
          </div>
        </>
      )}

      {/* EJERCICIOS */}
      {musculo && (
        <>
          <h2 className="text-xl font-semibold mb-2">
            Ejercicios para {musculo}:
          </h2>
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

export default DañoMuscular;
