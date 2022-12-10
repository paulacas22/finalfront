import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className=''>
      <h1>Registro de usuario</h1>
      <p>por favor ingresa tus datos:</p>
      <Form/>
    </div>
  )
}

export default Contact