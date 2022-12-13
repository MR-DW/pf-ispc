import React from "react";

// Import Servicios api rest
import * as TraerNotas from '../../ServiciosApi/TraerNotas'

// Import useState, useEffect
import { useState, useEffect } from "react";

export function VerNotaIndividual(){
 
  // useState
  const [verNota, setVerNota] = useState([]);
    
  // Funcion para traer notas
  const MostrarUnaNota = async () => {
      try{
        const res = await TraerNotas.getUnaNota();
        const data = await res.json();
        console.log(data)
        
        // le paso al seter de valores de la var, el nuevo estado(valores) que se lo brinda el consumo de la api.  useState
        setVerNota(data);
      } catch(error){
              console.log(error);
        }
      };
    
  // useEffect
  useEffect(() => {
      MostrarUnaNota();
  }, []);

  return (
    <>
      <div className="container">

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{verNota.Titulo}</h5>
            <p className="card-text">
              {verNota.Cuerpo}
            </p> 
          </div>
        </div>
        <div className="button">
          <button type="button" className="btn btn-primary">Modificar Nota</button>
          <button type="button" className="btn btn-primary">Eliminar Nota</button>
        </div>
      </div>
    </>
  );
};
