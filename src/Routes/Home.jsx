import React from 'react'
//import {useGlobalStates} from '../Components/utils/global.context'
import { useEstadosGlobales } from '../Components/utils/global.context'
import Card from '../Components/Card'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  
  const {data,theme,setTheme, handleTheme} =useEstadosGlobales()
  return (
    <main className={theme} >
      
      <h1>Home</h1>
      <div className='card-grid'>
        {data.map( item => <Card key={item.id} id={item.id} name={item.name} username={item.username}/>)} 
        {/* Aqui deberias renderizar las cards */}
      
      </div>
    </main>
  )
}

export default Home