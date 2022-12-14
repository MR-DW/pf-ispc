import React, {useState } from "react";
// , useEffect
import { useNavigate, useParams } from 'react-router-dom'
import * as TraerNotas from '../../ServiciosApi/TraerNotas'

export function CrearNota() {

  // console.log(ListadoDeNotas.nota)
  var history = useNavigate();
  var params = useParams();

   // useState
  const [nuevaNota, setNuevaNota] = useState(TraerNotas.infoNota);

  
  var res;
  const handleSubmit = async (e) => {
      console.log('HANDLESUBMIT:', nuevaNota);
      e.preventDefault();
   
      try {
        if(!params.id_notas){
          console.log('Entra en params.id_notas NO EXISTE');
          res = await TraerNotas.crearNotas(nuevaNota);
          console.log('RES:', res);
          const data = await res.json(); 
          console.log('DATA:', data);
          // setNuevaNota(data);
          if (data.id_notas !== 0){
              setNuevaNota(TraerNotas.infoNota);
          }
          history('/')
        }
      }catch(error){
        console.log(error);
      }
  };

  const handleInputChange = (e) =>{
    setNuevaNota({...nuevaNota, [e.target.name]: e.target.value});
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
            value = {nuevaNota.titulo}
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
            value={nuevaNota.cuerpo}
            onChange = {handleInputChange}
          ></textarea>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Identificador de Usuario
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Introduce tu número de ID de usuario..."  
            name="id_usuarios"
            value={nuevaNota.id_usuarios}
            onChange = {handleInputChange}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary" >
          Crear Nota
        </button>
      </form>
    </>
  )
};