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
import { CrearNota } from './componentes/CrearNota/CrearNota';
// import { ListadoDeNotas } from './componentes/TodasLasNotas/ListadoDeNotas';
import { VerNotaIndividual } from './componentes/VistaNota/VerNotaIndividual'

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <>
    {/* NavBar */}
      <BrowserRouter>
        <NavBar/> 
        {/* Siempre debe estar dentro del BrowserRouter */}
            <Routes>
              {/* <Route path='/login' element={</>} /> */}
              <Route exact path='/' element={<App/>} />
              {/* <Route path='/ver-notas' element={<App />} /> */}
              <Route path='/crear-nota' element={<CrearNota/>} />
              <Route path='/tu-nota/:id_usuarios/:id_notas/' element={<VerNotaIndividual />} />
            </Routes>

      </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
