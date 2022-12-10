import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import ContextProvider from './Components/utils/global.context';
//import {useEstadosGlobales} from './Components/utils/global.context'


ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <ContextProvider>
    <App />
    </ContextProvider>
    </BrowserRouter>

)
