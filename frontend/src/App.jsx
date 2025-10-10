import Header from "./components/Header/Header";

import NavBarClient from "./components/NavBarClient/NavBarClient";
import NavBarAdmin from "./components/NavBarAdmin/NavBarAdmin";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    {/* <div className="flex flex-col min-h-screen gap-0"> */}
      {/* <Header /> */}

      {/* 🔹 Contenedor principal con margen a la izquierda */}
      {/* <div className="flex  "> */}
        {/* Barra lateral fija */}
        {/* <NavBarAdmin /> */}

        {/* Contenido principal */}
        {/* <div className="flex p-10 md:ml-64">
          <Outlet />
        </div>
      </div>
      </div> */}

      <div className="flex min-h-screen">
  {/* Navbar fijo arriba */}
  <NavBarAdmin />

  {/* Contenedor principal */}
  <main className="flex flex-1 bg-gray-50">
    {/* Sidebar solo visible en escritorio */}
  

    {/* Contenido dinámico */}
    <section className="flex-1 p-6 md:ml-64 mt-[75px]">
      <Outlet />
    </section>
  </main>
</div>
      
    </>
  );
}

export default App;
