import React from "react";

const Users = () => {
  const [crear, setCrear] = React.useState(false);
  const [usuarios, setUsuarios] = React.useState([
    { id: 1, nombre: "Juan Pérez", correo: "juan@mail.com", estado: "Activo", cargo: "Administrador", diasRestantes: 30, tipo: "Mensualidad" },
    { id: 2, nombre: "María López", correo: "maria@mail.com", estado: "Inactivo", cargo: "Cliente", diasRestantes: 15, tipo: "Tiketera" },
  ]);
  const [confirmarCambio, setConfirmarCambio] = React.useState(null);
  const [nuevoUsuario, setNuevoUsuario] = React.useState({
    nombre: "",
    correo: "",
    estado: "Activo",
    cargo: "",
    contraseña: "",
    tipo: "",
    diasRestantes: 0,
  });

  const handleChange = (e) => {
    setNuevoUsuario({
      ...nuevoUsuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCrear(false);
    setNuevoUsuario({
      nombre: "",
      correo: "",
      estado: "Activo",
      cargo: "",
      contraseña: "",
      tipo: "",
      diasRestantes: 0,
    });
  };

  const pedirConfirmacion = (usuario, nuevoEstado) => {
    setConfirmarCambio({ usuario, nuevoEstado });
  };

  const confirmarEstado = () => {
    setUsuarios(
      usuarios.map((u) =>
        u.id === confirmarCambio.usuario.id
          ? { ...u, estado: confirmarCambio.nuevoEstado }
          : u
      )
    );
    setConfirmarCambio(null);
  };

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center md:text-left">
        Usuarios Registrados
      </h2>

      <div className="flex justify-center md:justify-start">
        <button
          className="mb-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 w-full sm:w-auto"
          onClick={() => setCrear(true)}
        >
          ➕ Crear Usuario
        </button>
      </div>

      {/* 🔹 Modal crear usuario (responsive) */}
      {crear && (
        <div className="fixed inset-0  bg-opacity-60 flex justify-center items-center z-50 px-4">
          <form
            className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg space-y-3"
            onSubmit={handleSubmit}
          >
            <h3 className="text-lg font-bold mb-2 text-center md:text-left">
              Nuevo Usuario
            </h3>

            <div className="space-y-2">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={nuevoUsuario.nombre}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="email"
                name="correo"
                placeholder="Correo"
                value={nuevoUsuario.correo}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="password"
                name="contraseña"
                placeholder="Contraseña"
                value={nuevoUsuario.contraseña}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="text"
                name="cargo"
                placeholder="Cargo"
                value={nuevoUsuario.cargo}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
                required
              />
              <select
                name="tipo"
                value={nuevoUsuario.tipo}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="">Selecciona tipo</option>
                <option value="Mensualidad">Mensualidad</option>
                <option value="Tiketera">Tiketera</option>
              </select>
              <input
                type="number"
                name="diasRestantes"
                placeholder="Días Restantes"
                value={nuevoUsuario.diasRestantes}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
                min={0}
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-2 mt-4">
              <button
                type="button"
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                onClick={() => setCrear(false)}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      )}

      {/* 🔹 Modal de confirmación (también responsivo) */}
      {confirmarCambio && (
        <div className="fixed inset-0  bg-opacity-60 flex justify-center items-center z-50 px-4">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm sm:max-w-md text-center">
            <h3 className="text-lg font-semibold mb-4">
              {confirmarCambio.nuevoEstado === "Inactivo"
                ? `¿Deseas inactivar a ${confirmarCambio.usuario.nombre}?`
                : `¿Deseas activar a ${confirmarCambio.usuario.nombre}?`}
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <button
                className={`px-4 py-2 rounded text-white ${
                  confirmarCambio.nuevoEstado === "Inactivo"
                    ? "bg-red-600"
                    : "bg-green-600"
                }`}
                onClick={confirmarEstado}
              >
                Confirmar
              </button>
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded"
                onClick={() => setConfirmarCambio(null)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🔹 Tabla (scroll horizontal en móvil) */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded shadow min-w-[600px]">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">ID</th>
              <th className="p-2">Nombre</th>
              <th className="p-2">Correo</th>
              <th className="p-2">Estado</th>
              <th className="p-2">Cargo</th>
              <th className="p-2">Tipo</th>
              <th className="p-2">Días</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u) => (
              <tr key={u.id} className="border-b hover:bg-gray-50">
                <td className="p-2">{u.id}</td>
                <td className="p-2">{u.nombre}</td>
                <td className="p-2">{u.correo}</td>
                <td className="p-2">{u.estado}</td>
                <td className="p-2">{u.cargo}</td>
                <td className="p-2">{u.tipo}</td>
                <td className="p-2">{u.diasRestantes}</td>
                <td className="p-2">
                  {u.estado === "Activo" ? (
                    <button
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500 text-sm"
                      onClick={() => pedirConfirmacion(u, "Inactivo")}
                    >
                      Inactivar
                    </button>
                  ) : (
                    <button
                      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-500 text-sm"
                      onClick={() => pedirConfirmacion(u, "Activo")}
                    >
                      Activar
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
