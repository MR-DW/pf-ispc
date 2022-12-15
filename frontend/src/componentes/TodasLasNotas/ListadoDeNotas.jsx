import React from 'react'
// import {render} from '@testing-library/react'
import * as TraerNotas from '../../ServiciosApi/TraerNotas'
import { useEffect, useState } from 'react';

// import link para dirigirme a una nota especifica. y poder editarla.
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


export function ListadoDeNotas(){

  // useParams
  const params = useParams();

  // useState
  const [nota, setNotas] = useState([]);
  
  // Funcion para traer notas
  const MostrarNotas = async () => {
    try{
      const res = await TraerNotas.getNotas();
      console.log(res);
      const data = await res.json();
      console.log(data);
      
      // le paso al seter de valores de la var, el nuevo estado(valores) que se lo brinda el consumo de la api.  useState
      setNotas(data);
    } catch(error){
            console.log(error);
      }
  };
  
  // useEffect
  useEffect(() => {
    MostrarNotas();
  },[]);

  return (
    <>
      {!nota ? 'No tienes notas' : nota.map((nota) => {
        return (
          <div className="card" id='card' key={nota.id_notas}>
            <div className="card-body">    
              <h5 className="card-title">{nota.titulo} {params.id_usuarios}</h5>               
              <p className="card-text">{nota.cuerpo}</p>
              <button type="button" className="btn btn-primary" >
                <Link aria-current="page" to={`/tu-nota/${nota.id_usuarios}/${nota.id_notas}/`}> 
                  Ver Nota
                </Link>
              </button>
            </div>
        </div>
        )}
      )} 
    </>
  )
}



