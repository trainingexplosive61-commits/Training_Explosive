import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NavBarClient from "./components/NavBarClient/NavBarClient";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <div className="flex flex-col min-h-screen gap-0">
      <Header />

      {/* 🔹 Contenedor principal con margen a la izquierda */}
      <div className="flex  ">
        {/* Barra lateral fija */}
        <NavBarClient />

        {/* Contenido principal */}
        <div className="flex p-10 md:ml-64">
          <Outlet />
        </div>
      </div>

      
      </div>
    </>
  );
}

export default App;
