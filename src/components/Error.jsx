// Manejo de los errores

const Error = ({children}) => {
  return (
    <div className="bg-red-700 text-white text-center p-3 rounded-md font-bold mb-3">
        <p>{ children }</p>
    </div>
  )
}

export default Error
