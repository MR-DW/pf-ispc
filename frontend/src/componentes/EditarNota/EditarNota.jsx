import React, {useState } from "react";
// , useEffect
import { useNavigate, useParams } from 'react-router-dom'
import * as TraerNotas from '../../ServiciosApi/TraerNotas'
// import * as ListadoDeNotas from '../TodasLasNotas/ListadoDeNotas'


// VER PORQUE NO FUNCIONA 
export function EditarNota() {

  var history = useNavigate();
  var params = useParams();

   // useState
  const [editarNota, setEditarNota] = useState([]);

  var res;
  const handleSubmit = async (e) => {
      console.log('HANDLESUBMIT:', editarNota);
      e.preventDefault();
   
      try {
        if(!params.id_notas){
          res = await TraerNotas.ModificarNota(editarNota);
          const data = await res.json(); 
          console.log('DATA:', data);
          // setNuevaNota(data);
          setEditarNota(editarNota.titulo, editarNota.cuerpo );
        //   if (data.id_notas === 0){
        //       // console.log('No hay params iguales a los id de las notas');
        //       setEditarNota(editarNota.titulo, editarNota.cuerpo );
        //       // console.log('setNuevaNota:',setNuevaNota(TraerNotas.infoNota))
        //   }
          history('/')
        }
      }catch(error){
        console.log(error);
      }
  };

  const handleInputChange = (e) =>{
    // this.setNuevaNota({value: e.target.value});
    setEditarNota({...editarNota, [e.target.name]: e.target.value});
    // console.log('name:',e.target.name);
    // console.log('value:',e.target.value);
    // console.log('nuevaNota',nuevaNota)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Titulo Nota
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Elige tu Titulo"
            name="titulo"
            value = {editarNota.titulo}
            onChange = {handleInputChange}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Texto
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Desarrolla tu nota..."  
            name="cuerpo"
            value={editarNota.cuerpo}
            onChange = {handleInputChange}
          ></textarea>
          {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Identificador de Usuario
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Introduce tu número de ID de usuario..."  
            name="id_usuarios"
            value={editarNota.id_usuarios}
            onChange = {handleInputChange}
          ></input> */}
        </div>
        <button type="submit" className="btn btn-primary" >
          Editar Nota
        </button>
      </form>
    </>
  )
};