import React from 'react'

import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';

const Detail = () => {
 
  // --------IMPORTANTE--------
  // Este componenteno no renderiza,lo verifique y compare con varios chicos y no encontramos errores :(, probe 
  //con un console.log en la res.data y nunca pude ver la informacion, trate con todo pero no supe que es lo quetengo mal

  const {id} = useParams();
  const [data, setData] = useState([]);
  const url =`https://jsonplaceholder.typicode.com/users/${id}`;
  useEffect(()=> {
    axios(url)
    .then(res => setData([res.data]));
  }, [])



  return (
    <>
      <h1> Detail dentista id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        {data.map((dentista)=> (
          <tr key={dentista.id} >
          <td>{dentista.name}</td>
          <td>{dentista.email}</td>
          <td>{dentista.phone}</td>
          <td>{dentista.webside}</td>
          </tr>
        ))}
      </tbody>
    </table>
      
    </>
  );
};

export default Detail ;