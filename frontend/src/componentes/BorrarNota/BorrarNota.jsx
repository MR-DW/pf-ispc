// , useEffect
import React, { useState }from 'react'
import { useNavigate, useParams } from 'react-router-dom';

// IMPORT DE API
import * as TraerNotas from '../../ServiciosApi/TraerNotas'


// VER PORQUE NO BORRA LA NOTA
export function BorrarNota() {

    var history = useNavigate();
    var params = useParams();
    
    // useState
    const [borrarNota, setBorrarNota] = useState([]);
    
  // Funcion para traer notas
    var res;
    const handleOnClick = async () => {
        console.log('HANDLESUBMIT:', borrarNota);
        try{
            if(params.id_notas){
                // console.log('Entra en params.id_notas NO EXISTE');
                res = await TraerNotas.EliminarNota();
                // console.log('RES:', res);
                const data = await res.json(); 
                // console.log('DATA:', data);
                // setNuevaNota(data);
                if (data.id_notas === 0){
                    setBorrarNota('');
                    console.log('se borro');
                }
                history('/')
              }
    //         const res = await TraerNotas.EliminarNota();
    //     // console.log(res)
    //         const data = await res.json();
    //     // console.log(data)
    //     // const { id_notas, titulo, cuerpo, id_usuarios } = data.verNota;
    //     // le paso al seter de valores de la var, el nuevo estado(valores) que se lo brinda el consumo de la api.  useState
    //         setBorrarNota(data);
      } catch(error){
              console.log(error);
        }
      };
  
    return (
    <>
        <button onClick={handleOnClick} className='borrar-nota btn btn-danger' type='button'>
            Eliminar
        </button>

    </>
  )
}
