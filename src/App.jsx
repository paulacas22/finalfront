import { Route, Routes } from "react-router-dom";
import {routes} from "./Routes";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import NotFound from "./Routes/NotFound";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  const [data, setData] = useState([])
  const url ='https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    axios(url)
    .then(res => setData(res.data))
  }, [])  

  return (
      <>
      <Navbar/>
      <Routes>
          <Route path={routes.home} element={<Home />}/>
          <Route path={routes.dentist} element={<Detail />}/>
          <Route path={routes.favs} element={<Favs/>}/>
          <Route path={routes.contact} element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
      
      </>
  );
}

export default App;
