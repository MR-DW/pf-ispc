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
import { Login } from './componentes/Login-Logout-Register/Login';
import { RegistrarUsuario } from './componentes/Login-Logout-Register/RegistrarUsuario';
// import { ListadoDeNotas } from './componentes/TodasLasNotas/ListadoDeNotas';
import { TuNota } from './componentes/TuNota/TuNota'
import { EditarNota } from './componentes/EditarNota/EditarNota';

import { CrearNota } from './componentes/CrearNota/CrearNota';

// import de los estados iniciales para probar enlaaces dinamicos
// import * as TraerNotas from './ServiciosApi/TraerNotas';
// import * as ManejarUsuarios from "./ServiciosApi/ManejarUsuarios";
// import * as ListadoDeNotas from './componentes/TodasLasNotas/ListadoDeNotas'

const root = ReactDOM.createRoot(document.getElementById('root'));
  // console.log(ListadoDeNotas.nota.id_usuarios_id)

root.render(
  <>
    {/* NavBar */}
      <BrowserRouter>
        
        
        {/* Siempre debe estar dentro del BrowserRouter */}
            <Routes>
              <Route exact path='/' element={<Login/>} />
              
              <Route path='/usuario/registrar-usuario/' element={<RegistrarUsuario />} />

              <Route  path='/notas/mostrar-notas/:id_usuarios/' element={<App/>} />
              
              <Route path='/notas/tu-nota/:id_usuarios/:id_notas/' element={<TuNota />} />
              
              <Route path='/notas/editar-nota/:id_usuarios/:id_notas/' element={<EditarNota />} />
              
              <Route path='/notas/crear-nota/' element={<CrearNota/>} />
            </Routes>

      </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
