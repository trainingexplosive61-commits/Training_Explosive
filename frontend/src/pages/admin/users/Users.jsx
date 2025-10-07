import React from 'react'

const Users = () => {
    const [crear, setCrear] = React.useState(false);
    const [usuarios, setUsuarios] = React.useState([
        // BACKEND: Aquí deberías cargar los usuarios desde la base de datos usando una petición GET al backend.
        { id: 1, nombre: "Juan Pérez", correo: "juan@mail.com", estado: "Activo", cargo: "Administrador", diasRestantes: 30, tipo: "Mensualidad" },
        { id: 2, nombre: "María López", correo: "maria@mail.com", estado: "Inactivo", cargo: "Cliente", diasRestantes: 15, tipo: "Tiketera" },
    ]);
    const [usuarioSeleccionado, setUsuarioSeleccionado] = React.useState(null);
    const [confirmarCambio, setConfirmarCambio] = React.useState(null);

    // Estado para el formulario
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
        // BACKEND: Aquí deberías enviar los datos de nuevoUsuario al backend con una petición POST para crear el usuario.
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
        // BACKEND: Después de crear el usuario, deberías actualizar la lista de usuarios con los datos del backend.
    };

    const pedirConfirmacion = (usuario, nuevoEstado) => {
        setConfirmarCambio({ usuario, nuevoEstado });
    };

    const confirmarEstado = () => {
        // BACKEND: Aquí deberías enviar una petición PUT/PATCH al backend para actualizar el estado del usuario.
        setUsuarios(usuarios.map(u =>
            u.id === confirmarCambio.usuario.id
                ? { ...u, estado: confirmarCambio.nuevoEstado }
                : u
        ));
        setConfirmarCambio(null);
        // BACKEND: Después de actualizar el estado, deberías refrescar la lista de usuarios desde el backend.
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Usuarios Registrados</h2>
            <button
                className="mb-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
                onClick={() => setCrear(true)}
            >
                ➕ Crear Usuario
            </button>

            {/* Formulario modal */}
            {crear && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                    <form
                        className="bg-white p-6 rounded shadow w-80"
                        onSubmit={handleSubmit}
                    >
                        <h3 className="text-lg font-bold mb-4">Nuevo Usuario</h3>
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Nombre"
                            value={nuevoUsuario.nombre}
                            onChange={handleChange}
                            className="w-full mb-2 p-2 border rounded"
                            required
                        />
                        <input
                            type="email"
                            name="correo"
                            placeholder="Correo"
                            value={nuevoUsuario.correo}
                            onChange={handleChange}
                            className="w-full mb-2 p-2 border rounded"
                            required
                        />
                        <input
                            type="password"
                            name="contraseña"
                            placeholder="Contraseña"
                            value={nuevoUsuario.contraseña}
                            onChange={handleChange}
                            className="w-full mb-2 p-2 border rounded"
                            required
                        />
                        <input
                            type="text"
                            name="cargo"
                            placeholder="Cargo"
                            value={nuevoUsuario.cargo}
                            onChange={handleChange}
                            className="w-full mb-2 p-2 border rounded"
                            required
                        />
                        <select
                            name="tipo"
                            value={nuevoUsuario.tipo}
                            onChange={handleChange}
                            className="w-full mb-2 p-2 border rounded"
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
                            className="w-full mb-4 p-2 border rounded"
                            min={0}
                            required
                        />
                        <div className="flex justify-between">
                            <button
                                type="button"
                                className="bg-gray-400 text-white px-4 py-2 rounded"
                                onClick={() => setCrear(false)}
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="bg-green-600 text-white px-4 py-2 rounded"
                            >
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Modal de confirmación */}
            {confirmarCambio && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded shadow w-80">
                        <h3 className="text-lg font-bold mb-4">
                            {confirmarCambio.nuevoEstado === "Inactivo"
                                ? `¿Seguro que deseas inactivar a ${confirmarCambio.usuario.nombre}?`
                                : `¿Seguro que deseas activar a ${confirmarCambio.usuario.nombre}?`}
                        </h3>
                        <div className="flex justify-between">
                            <button
                                className={`px-4 py-2 rounded text-white ${confirmarCambio.nuevoEstado === "Inactivo"
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

            <table className="w-full bg-white rounded shadow">
                <thead>
                    <tr className="bg-gray-200 text-left">
                        <th className="p-2">ID</th>
                        <th className="p-2">Nombre</th>
                        <th className="p-2">Correo</th>
                        <th className="p-2">Estado</th>
                        <th className="p-2">Cargo</th>
                        <th className="p-2">Tipo</th>
                        <th className="p-2">Días Restantes</th>
                        <th className="p-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((u) => (
                        <tr key={u.id} className="border-b hover:bg-gray-50 ">
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
                                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500"
                                        onClick={() => pedirConfirmacion(u, "Inactivo")}
                                    >
                                        Inactivar
                                    </button>
                                ) : (
                                    <button
                                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
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
    )
}

export default Users
