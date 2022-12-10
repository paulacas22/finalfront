import { createContext, useContext, useEffect, useState,useReducer} from "react";
import axios from "axios";
import { reducer } from "react";


export const ContextGlobal = createContext();
export const initialState = {theme: "", data: []}
export const ContextProvider = ({ children }) => {
  const [data,setData] =useState ([])
  const url ='https://jsonplaceholder.typicode.com/users'
  

  const [theme,setTheme] =useState(initialState)
  const handleTheme = () => {
    theme === ''? setTheme('dark') : setTheme ('')
  }

  const initialFavState = []

    const favsReducer = (state, action) => {
    switch(action.type){
        case 'ADD_FAV':
            return [...state, action.payload]
    }
    
}
const [state, dispatch] = useReducer(reducer, initialState)
const [stateFavs, dispatchFavs] = useReducer(favsReducer, initialFavState, initFav)
function initFav(initialFavState) {
  return localStorage.getItem("favs")
    ? JSON.parse(localStorage.getItem("favs"))
    : initialFavState;
}

useEffect(() => {
  localStorage.setItem('favs', JSON.stringify(stateFavs))
}, [stateFavs])



  useEffect(()=> {
    axios(url)
    .then(res => setData(res.data))
  }, [])
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobal.Provider value={{
      data,
      setData,
      theme,
      setTheme,
      handleTheme,
      stateFavs,
      dispatchFavs,
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider;
export const useEstadosGlobales = () => {
  return useContext(ContextGlobal)
}
