
const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

    // Traer los datos del arreglo para iterarlos
    const { nombre, propietario, email, fecha, sintomas, id } = paciente

    // Alerta para eliminar paciente
    const handleEliminar = () => {
        const respuesta = confirm('¿ Deseas eliminar este paciente?')
        // si hay una respuesta confirmando se elimina
        if (respuesta) {
            eliminarPaciente(id)
        }
    }

    return (
        <div className="bg-white shadow-lg px-5 py-10 rounded-lg m-5">
            <p className="font-bold mb-3 text-gray-700">
                Nombre de la Mascota: {' '}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700">
                Propietario: {' '}
                <span className="font-normal normal-case">{propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700">
                Correo electrónico: {' '}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700">
                Fecha de alta: {' '}
                <span className="font-normal normal-case">{fecha}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700">
                Síntomas: {' '}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>

            
            <div className="flex justify-between mt-10">
                {/* boton de editar registro */}
                <button
                    type="button"
                    className="flex items-center justify-between py-2 px-6 bg-[#ffc107] hover:bg-yellow-500 text-black font-bold rounded-full"
                    onClick={() => setPaciente(paciente)} // Evento para editar
                >
                    <span>Editar</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block ml-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                </button>

                {/* botón de eliminar registro */}
                <button type="button" 
                    className="flex items-center justify-between py-2 px-6 bg-rojo hover:bg-red-600 text-white font-bold rounded-full"
                    onClick={ handleEliminar }>
                    <span>Eliminar</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block ml-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </button>
                
            </div>
        </div>
    )
}

export default Paciente
