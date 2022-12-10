import React from 'react'
import { useEstadosGlobales, ContextProvider } from './utils/global.context';
import {routes} from './../Routes';
import { Link } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, setTheme, handleTheme } = useEstadosGlobales ()
  
  return (
    <nav className= {theme} >
      
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to={routes.contact}><h3>Contact</h3></Link>
      <Link to={routes.home}><h3>Home</h3></Link>
      <Link to={routes.favs}><h3>Favs</h3></Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className ="button" onClick={handleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar