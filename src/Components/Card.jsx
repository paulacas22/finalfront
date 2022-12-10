import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useEstadosGlobales } from "./utils/global.context";



const Card = ({id,name,username}) => {
  const {data,theme,setTheme,handleTheme, state, dispatchFavs } =useEstadosGlobales()

    // Aqui iria la logica para agregar la Card en el localStorage
    const addFav = () => {
      dispatchFavs({type: 'ADD_FAV', payload:{name,username,id}})
  }

  return (
    <div className="card">
      <Link key={id} to={`/dentist/${id}`}>
      <img src="/images/doctor.jpg" alt="dentista"/>
        <h2>{username}</h2>
        <h2>{name}</h2>
      </Link>


        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
