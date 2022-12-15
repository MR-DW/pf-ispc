import React from "react";
// IMPORT LINK
import { Link } from "react-router-dom";

// Import Servicios api rest
import * as TraerNotas from '../../ServiciosApi/TraerNotas'

// Import componente barra de navegacion
import { NavBar } from '../NavBar';

// IMPORT COMPONENTE BORRAR NOTA
import { BorrarNota } from '../BorrarNota/BorrarNota'

// Import useState, useEffect
import { useState, useEffect } from "react";


// Import useParams
import { useParams } from "react-router-dom";

export function TuNota(){
 
  // useParams
  const { id_usuarios, id_notas } = useParams();
  console.log(id_usuarios, id_notas);
  console.log(useParams());

  // useState
  const [verNota, setVerNota] = useState([]);

  // Funcion para traer notas
  const MostrarUnaNota = async () => {
 
    try{
        const res = await TraerNotas.getUnaNota({ id_usuarios, id_notas });
        const data = await res.json();
        console.log('DATA:', data)
        // le paso al seter de valores de la var, el nuevo estado(valores) que se lo brinda el consumo de la api.  useState
        setVerNota(data);
        // console.log(params.id_usuarios);
        
        // console.log(verNota.id_usuarios)
      } catch(error){
              console.log(error);
        }
      };
    
  // useEffect
  useEffect(() => {
      MostrarUnaNota();
  },[]);

  return (
    <>
      <NavBar />
      <div className="container" key={verNota.id_notas}>
          <div className="card">
              <div className="card-body" >
                <h5 className="card-title" >{verNota.titulo}</h5>
                <p className="card-text" >
                {verNota.cuerpo}
                </p> 
              </div>
          </div>

          <div className="button">
            <button type="button" className="btn btn-primary">
                <Link aria-current="page" to={`/notas/editar-nota/${verNota.id_usuarios_id}/${verNota.id_notas}/`}> 
                  Editar...
                </Link>
            </button>
            
          </div>
          <div>
            <BorrarNota />
          </div>
          
      </div>
    </>
  );
};
