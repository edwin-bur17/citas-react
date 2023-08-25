import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes,setPaciente, eliminarPaciente }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {/* Condicional ternario para controlar la vista de mostrar pacientes si los hay o si no hay mostar un mesaje */}
      {pacientes && pacientes.length ? ( // si hay pacientes
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {' '}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {/* iterar los registros */}
          {pacientes.map(paciente => (
            <Paciente
              // Mostrar los datos ingresados
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : ( // si no hay pacientes
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comience agregando pacientes {' '}
            <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
          </p>
        </>
      )}
    </div>
  )
}

export default ListadoPacientes
