import React from 'react'
// import {render} from '@testing-library/react'
import * as TraerNotas from '../../ServiciosApi/TraerNotas'
import { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'reac.router-dom'

// import link para dirigirme a una nota especifica. y poder editarla.
// import { Link } from 'react-router-dom';

export function ListadoDeNotas(){

  // useParams, useNAvigate
  // const history = useNavigate();
  // const params = useParams();

  // useState
  const [nota, setNotas] = useState([]);
  
  // Funcion para traer notas
  const MostrarNotas = async () => {
    try{
      const res = await TraerNotas.getNotas();
      const data = await res.json();
      
      // le paso al seter de valores de la var, el nuevo estado(valores) que se lo brinda el consumo de la api.  useState
      setNotas(data);
      // history('/');
    } catch(error){
            console.log(error);
      }
  };
  
  // useEffect
  useEffect(() => {
    MostrarNotas();
  }, []);

  return (
    <>
      {!nota ? 'No tienes notas' : nota.map((nota, index) => {
        return (
          <div className="card" id='card'>
            <div className="card-body">    
              <h5 className="card-title">{nota.titulo}</h5>               
              <p className="card-text">{nota.cuerpo}</p>
              <button type="button" className="btn btn-primary" >
                {/* <Link aria-current="page" to={require(`/personalizar-nota/${nota.id_notas}/`)}>  */}
                  Mis Notas
                {/* </Link> */}
              </button>
            </div>
        </div>
        )}
      )} 
    </>
  )
}



