// , useEffect
import React, { useState, useEffect }from 'react'
import { useNavigate, useParams } from 'react-router-dom';

// IMPORT DE API
import * as TraerNotas from '../../ServiciosApi/TraerNotas'


// VER PORQUE NO BORRA LA NOTA
export function BorrarNota() {

    var history = useNavigate();
    const { id_usuarios, id_notas } = useParams();
    console.log(id_usuarios, id_notas);
    console.log(useParams());
    
    // useState
    const [borrarNota, setBorrarNota] = useState([]);

    // Funcion para traer notas
    const HandleDelete = async (e) => {
      // e.preventDefault();
      try{
        // if (id_notas === borrarNota.id_notas) {
            const res = await TraerNotas.EliminarNota({ id_usuarios, id_notas });
            console.log('RES:', res);
            const data = await res.json();
            console.log('DATA:', data);
            setBorrarNota(data);
            console.log('se borro');
            // if (data.id_notas === 0){
            //     setBorrarNota('');
            //     console.log('se borro');
            // }
            history(`/notas/mostrar-notas/${id_usuarios}/`)
          // }
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
