import React from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Users = () => {
  const [crear, setCrear] = React.useState(false);
  const [usuarios, setUsuarios] = React.useState([
    {
      id: 1,
      nombre: "Juan Pérez",
      correo: "juan@mail.com",
      estado: "Activo",
      cargo: "Administrador",
      diasRestantes: 30,
      tipo: "Mensualidad",
      peso: "70kg",
      enfermedades: "Ninguna",
    },
    {
      id: 2,
      nombre: "María López",
      correo: "maria@mail.com",
      estado: "Inactivo",
      cargo: "Cliente",
      diasRestantes: 15,
      tipo: "Tiketera",
      peso: "62kg",
      enfermedades: "Asma leve",
    },
  ]);

  const [nuevoUsuario, setNuevoUsuario] = React.useState({
    nombre: "",
    correo: "",
    estado: "Activo",
    cargo: "",
    contraseña: "",
    tipo: "",
    diasRestantes: 0,
    peso: "",
    enfermedades: "",
  });

  const handleChange = (e) => {
    setNuevoUsuario({
      ...nuevoUsuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = usuarios.length + 1;
    setUsuarios([...usuarios, { id, ...nuevoUsuario }]);

    Swal.fire({
      icon: "success",
      title: "Usuario creado",
      text: "El usuario se ha registrado correctamente.",
      confirmButtonColor: "#16a34a",
    });

    setCrear(false);
    setNuevoUsuario({
      nombre: "",
      correo: "",
      estado: "Activo",
      cargo: "",
      contraseña: "",
      tipo: "",
      diasRestantes: 0,
      peso: "",
      enfermedades: "",
    });
  };

  const cambiarEstado = (usuario) => {
    const nuevoEstado = usuario.estado === "Activo" ? "Inactivo" : "Activo";

    Swal.fire({
      title: `¿Deseas ${nuevoEstado === "Inactivo" ? "inactivar" : "activar"} a ${usuario.nombre}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, confirmar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: nuevoEstado === "Inactivo" ? "#dc2626" : "#16a34a",
    }).then((result) => {
      if (result.isConfirmed) {
        setUsuarios(
          usuarios.map((u) =>
            u.id === usuario.id ? { ...u, estado: nuevoEstado } : u
          )
        );
        Swal.fire({
          icon: "success",
          title: `Usuario ${nuevoEstado}`,
          text: `${usuario.nombre} ahora está ${nuevoEstado}.`,
          confirmButtonColor: "#16a34a",
        });
      }
    });
  };

  const eliminarUsuario = (id) => {
    const usuario = usuarios.find((u) => u.id === id);
    Swal.fire({
      title: `¿Eliminar a ${usuario.nombre}?`,
      text: "Esta acción no se puede deshacer.",
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#dc2626",
    }).then((result) => {
      if (result.isConfirmed) {
        setUsuarios(usuarios.filter((u) => u.id !== id));
        Swal.fire({
          icon: "success",
          title: "Eliminado",
          text: "El usuario fue eliminado correctamente.",
          confirmButtonColor: "#16a34a",
        });
      }
    });
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

      {/* 🔹 Modal crear usuario */}
      {crear && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 px-4">
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
              <input
                type="text"
                name="peso"
                placeholder="Peso (ej: 70kg)"
                value={nuevoUsuario.peso}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                name="enfermedades"
                placeholder="Enfermedades (si tiene)"
                value={nuevoUsuario.enfermedades}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
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

      {/* 🔹 Tabla */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded shadow min-w-[800px]">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">ID</th>
              <th className="p-2">Nombre</th>
              <th className="p-2">Correo</th>
              <th className="p-2">Estado</th>
              <th className="p-2">Cargo</th>
              <th className="p-2">Tipo</th>
              <th className="p-2">Días</th>
              <th className="p-2">Peso</th>
              <th className="p-2">Enfermedades</th>
              <th className="p-2 text-center">Acciones</th>
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
                <td className="p-2">{u.peso}</td>
                <td className="p-2">{u.enfermedades || "Ninguna"}</td>
                <td className="p-2 flex flex-col sm:flex-row gap-2 justify-center">
                  <button
                    className={`text-white px-3 py-1 rounded text-sm ${
                      u.estado === "Activo"
                        ? "bg-red-600 hover:bg-red-500"
                        : "bg-green-600 hover:bg-green-500"
                    }`}
                    onClick={() => cambiarEstado(u)}
                  >
                    {u.estado === "Activo" ? "Inactivar" : "Activar"}
                  </button>
                  <button
                    className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-600 text-sm"
                    onClick={() => eliminarUsuario(u.id)}
                  >
                    Eliminar
                  </button>
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
