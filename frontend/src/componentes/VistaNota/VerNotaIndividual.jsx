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
        const res = await TraerNotas.getUnaNota(verNota);
        // console.log(res)
        const data = await res.json();
        // console.log(data)
        // const { id_notas, titulo, cuerpo, id_usuarios } = data.verNota;
        // le paso al seter de valores de la var, el nuevo estado(valores) que se lo brinda el consumo de la api.  useState
        setVerNota(data);
      } catch(error){
              console.log(error);
        }
      };
    
  // useEffect
  useEffect(() => {
      MostrarUnaNota();
  });

  return (
    <>
      <div className="container">
        <div className="card">
        {!verNota ? 'No se encuentra tu nota' : verNota.map((verNota, index) => {
           return (
            <>
              <div className="card-body" key={index}>
                <h5 className="card-title" key={index}>{verNota.titulo}</h5>
                <p className="card-text" key={index}>
                {verNota.cuerpo}
                </p> 
              </div>
            </>
           )} 
        )} 
          <div className="button">
            <button type="button" className="btn btn-primary">Modificar Nota</button>
            <button type="button" className="btn btn-primary">Eliminar Nota</button>
          </div>
        </div>
      </div>

    </>
  );
};
