import React, {useState } from "react";
// , useEffect
import { useNavigate, useParams } from 'react-router-dom'
// Import de server 
import * as TraerNotas from '../../ServiciosApi/TraerNotas'
// Import de barra de navegacion
import { NavBar } from "../NavBar";

// VER PORQUE NO FUNCIONA 
export function EditarNota() {

  // useNavigate
  var history = useNavigate();
  // useParams para ruta dinamica
  const { id_usuarios, id_notas } = useParams();
  console.log(id_usuarios, id_notas);
  console.log(useParams());

   // useState
  const [editarNota, setEditarNota] = useState([]);

  var res;
  const handleSubmit = async (e) => {
      console.log('HANDLESUBMIT:', editarNota);
      e.preventDefault();
   
      try {
        if(id_notas === editarNota.id_notas){
          res = await TraerNotas.ModificarNota({ id_usuarios, id_notas });
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
      <NavBar/>
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
        </div>
        <button type="submit" className="btn btn-primary" >
          Guardar Cambios...
        </button>
      </form>
    </>
  )
};