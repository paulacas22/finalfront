import React, { useEffect, useState }  from "react";
import Card from "../Components/Card";
import { useEstadosGlobales } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const [favs, setFavs] = useState ([])

  useEffect(() =>{
    const dentistList = JSON.parse(localStorage.getItem("favs"));
    setFavs(dentistList);

  },[]);
  
  console.log(favs);

  return (
    <>
      <h1>Estos son tus favoritos!!</h1>
      <div className="card-grid">
      {favs.map( item => <Card key={item.id} id={item.id} name={item.name} username={item.username}/>)}

      </div>
    </>
  );
};

export default Favs;
