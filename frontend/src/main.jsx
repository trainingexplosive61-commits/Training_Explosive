import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";

// 🔹 Importaciones Admin
import Routines from "./pages/Admin/Routines/Routines.jsx";
import User from "./pages/Admin/Users/Users.jsx";
import SubirVideos from "./pages/Admin/SubirVideos/SubirVideos.jsx";
import VerVideos from "./pages/Admin/VerVideos/VerVideos.jsx";
import Login from "./pages/Login/Login.jsx";

// 🔹 Importaciones Cliente (comentadas)
/*
import DañoMuscular from "./pages/Client/DañoMuscular/DañoMuscular.jsx";
import Fuerza from "./pages/Client/Fuerza/Fuerza.jsx";
import EstresMetabolico from "./pages/Client/EstresMetabolico/EstresMetabolico.jsx";
*/

createRoot(document.getElementById("root")).render(
  // 🔹 RUTAS CLIENTE (comentadas)
  /*
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="dañomuscular" element={<DañoMuscular />} />
        <Route path="fuerza" element={<Fuerza />} />
        <Route path="estresmetabolico" element={<EstresMetabolico />} />
        <Route
          path="*"
          element={
            <div className="p-6 text-gray-700">
              👋 Bienvenido, selecciona un objetivo en la barra lateral.
            </div>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
  */

  // 🔹 RUTAS ADMIN (activas)
  <BrowserRouter>
    <Routes>
      {/* Layout principal con NavbarAdmin */}
      <Route path="/" element={<App />}>
        <Route path="user" element={<User />} />
        <Route path="routines" element={<Routines />} />
        <Route path="subirvideos" element={<SubirVideos />} />
        <Route path="vervideos" element={<VerVideos />} />

        <Route
          path="*"
          element={
            <div className="p-6 text-gray-700">
              👋 Bienvenido, selecciona una opción en la barra lateral.
            </div>
          }
        />
      </Route>

      {/* Login fuera del layout principal */}
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);
