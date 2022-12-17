// , useEffect
import React, { useState, useEffect }from 'react'
import { useNavigate, useParams } from 'react-router-dom';

// IMPORT DE API
import * as TraerNotas from '../../ServiciosApi/TraerNotas'

export function BorrarNota() {

    var history = useNavigate();
    const { id_usuarios, id_notas } = useParams();
    console.log(id_usuarios, id_notas);
    console.log(useParams());
    
    // useState
    const [borrarNota, setBorrarNota] = useState([]);

    // Funcion para traer notas
    const HandleDelete = async (e) => {

      try{
            const res = await TraerNotas.EliminarNota({ id_usuarios, id_notas });
            console.log('RES:', res);
            const data = await res.json();
            console.log('DATA:', data);
            setBorrarNota(data);
            console.log('se borro');
            
            history(`/notas/mostrar-notas/${id_usuarios}/`)
  } catch(error){
          console.log(error);
    }
  }  
  
  return (
    <>
        <button onClick={ (e) => HandleDelete() } className='borrar-nota btn btn-danger' type='button'>
            Eliminar
        </button>

    </>
  )
}
