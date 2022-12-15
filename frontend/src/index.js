import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import Links
// import { Link } from 'react-router-dom';

// import Componentes Extras
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// importar Componentes Propios
import { NavBar } from './componentes/NavBar';
import { Login } from './componentes/Login-Logout-Register/Login';
import { RegistrarUsuario } from './componentes/Login-Logout-Register/RegistrarUsuario';
// import { ListadoDeNotas } from './componentes/TodasLasNotas/ListadoDeNotas';
import { TuNota } from './componentes/TuNota/TuNota'
import { EditarNota } from './componentes/EditarNota/EditarNota';

import { CrearNota } from './componentes/CrearNota/CrearNota';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <>
    {/* NavBar */}
      <BrowserRouter>
        <NavBar/> 
        {/* Siempre debe estar dentro del BrowserRouter */}
            <Routes>
              <Route path='/login' element={<Login/>} />
              <Route path='/registrar-usuario' element={<RegistrarUsuario />} />
              
              <Route exact path='/' element={<App/>} />
              <Route path='/tu-nota/1/12' element={<TuNota />} />
              <Route path='/editar-nota/1/12' element={<EditarNota />} />
              
              <Route path='/crear-nota' element={<CrearNota/>} />
            </Routes>

      </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
