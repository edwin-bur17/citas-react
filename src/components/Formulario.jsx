import { useState, useEffect } from 'react'; // importaciones
import Error from './Error';

/* useEffect
import {useEffect} from "react"
useEffect( () => {
  console.log('El componenete está listo);
}), [])
*/

// const [cliente, setCliente] = useState({});  Sintaxis para el uso de useState
// const [total, setTotal] = useState(0);
// const [modal, setModal] = useState(false);

// Aquí se utiliza un Arrow Function
const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  // Implemetación useState
  // Siempre va dentro de la función pero antes del return
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false)

  // useEfect para editar
  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre) // nombre
      setPropietario(paciente.propietario) // propietario
      setEmail(paciente.email) // Email
      setFecha(paciente.fecha) // Fecha alta
      setSintomas(paciente.sintomas) // Síntomas
    }
  }, [paciente])



  // Generar id
  const generarId = () => {
    const ramdom = Math.random().toString(17).substring(2);
    const fecha = Date.now().toString(17)

    return ramdom + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')) { // Verifica si hay un string vacido
      console.log('Hay uno o más campos vacidos')
      setError(true)
      return;
    }
    setError(false)

    // Objeto Paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      //id: generarId()
    }

    // Crear un nuevo paciente y editar un paciente
    if (paciente.id) {
      // Editar registro
      objetoPaciente.id = paciente.id

      // Se itera y detecta el id del paciente a actualizar, si no hay cambios toma lo que hay en pacienteState
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

      setPacientes(pacientesActualizados) // actualizar cambios
      setPaciente({})

    } else {
      // Nuevo registro
      objetoPaciente.id = generarId() // generar el id para el nuevo paciente
      setPacientes([...pacientes, objetoPaciente]); // se asigna un arreglo nuevo
    }

    // Reiniciar el formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      {paciente.id ? (
        <>
          <h2 className="font-black text-indigo-600 text-2xl text-center">Editar Paciente</h2>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
          <p className="text-lg mt-5 text-center">
            Añade pacientes y {' '}
            <span className="text-indigo-600 font-bold">Administralos</span>
          </p>
        </>
      )}

      <form
        action=""
        onSubmit={handleSubmit}
        className="border-black bg-white  shadow-lg shadow-indigo-600/40  rounded-lg py-10 px-5 m-5">

        {/* Alerta de error */}
        {error && <Error>Todos los campos son obligatorios</Error>}

        <div className="mt-5">
          <label htmlFor="mascota" className="block text-gray-700 font-bold">
            Nombre Mascota:
          </label>
          <input type="text"
            className="border-2 w-full mt-2 placeholder-slate-400 rounded-md h-10 focus:outline-none focus:border-indigo-600"
            name=""
            id="mascota"
            placeholder="Nombre de la mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} />
        </div>

        <div className="mt-5">
          <label htmlFor="propietario"
            className="block text-gray-700 font-bold">
            Nombre Propietario:
          </label>
          <input type="text"
            className="border-2 w-full mt-2 placeholder-slate-400 rounded-md h-10 focus:outline-none focus:border-indigo-600"
            name=""
            id="propietario"
            placeholder="Nombre del propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)} />
        </div>

        <div className="mt-5">
          <label htmlFor="email" className="block text-gray-700 font-bold peer-invalid:text-red-500">
            Email:
          </label>
          <input type="email" className="border-2 w-full h-10 mt-2 placeholder-slate-400 rounded-md peer focus:outline-none focus:border-indigo-600"
            name=""
            id="email"
            placeholder="Email del propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Por favor escribe una dirección de correo válida.
          </p>
        </div>

        <div className="mt-5">
          <label htmlFor="alta" className="block text-gray-700 font-bold">
            Fecha Alta:
          </label>
          <input type="date"
            className="border-2 w-full mt-2 placeholder-slate-400 rounded-md h-10 focus:outline-none focus:border-indigo-600"
            id="alta"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)} />
        </div>

        <div className="mt-5">
          <label htmlFor="sintomas" className="block text-gray-700 font-bold">
            Síntomas:
          </label>
          <textarea
            className="border-2 w-full mt-2 rounded-md focus:outline-none focus:border-indigo-600"
            name=""
            id="sintomas"
            placeholder="Describe los síntomas ..."
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}>

          </textarea>
        </div>

        {/* <input type="submit" className="bg-indigo-600 w-full p-3 mt-5 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors rounded-full" value="Agregar Paciente" /> */}
        <input type="submit" value={paciente.id ? 'Guardar Cambios' : 'Agregar Paciente'} className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 w-full rounded-full mt-5 cursor-pointer font-bold text-center text-white uppercase transition-colors' />
      </form>

    </div>
  )
}

export default Formulario

