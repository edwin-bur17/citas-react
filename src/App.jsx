import { useState, useEffect } from "react"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import Formulario from "./components/Formulario"

// props -> propiedades sirven para pasar variables o funciones de otros componentes
// Ejemplo sintaxis: <header nombreProp={ datos o funciones}
function App() {

  //const [pacientes, setPacientes] = useState([]);
  //const [paciente, setPaciente] = useState({}); // useState para editar

  const [pacientes, setPacientes] = useState(() => 
  JSON.parse(localStorage.getItem('pacientes')) || [] );
  const [paciente, setPaciente] = useState({});


  // Localstorage para no perder los cambios cada vez que la página se recarge
  /*useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];

      setPacientes(pacientesLS)
    }
    obtenerLS()
  }, [])*/

  
  /*useEffect(() => {
    const pacientesLS = JSON.parse(localStorage.getItem('pacientes'));
    pacientesLS?.length > 0 && setPacientes(pacientesLS);

    
  }, [pacientes])*/

  // Este si funciona
  useEffect(() =>{
    localStorage.setItem('pacientes', JSON.stringify( pacientes));
  }, [pacientes])

  // Localstorage para no perder los cambios cada vez que la página se recarge
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = (id) => {
    // console.log('Eliminando paciente ', id)
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id) // me trae los registros diferentes al id que estoy pasando
    setPacientes(pacientesActualizados) // Actualizar
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes} // variable
          setPacientes={setPacientes} // modificador
          paciente={paciente} // para editar 
          setPaciente={setPaciente} // para limpiar el anterior registro
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
