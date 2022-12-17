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
  // console.log(id_usuarios, id_notas);
  // console.log(useParams());

   // useState
  const [editarNota, setEditarNota] = useState([]);

  const handleSubmit = async (e) => {
      console.log('HANDLESUBMIT:', editarNota);
      e.preventDefault();
   
      // La ejecución lógica no consume la api ya que no entra en el try y no ejecuta el response, tampoco me devuelve un error en consola.
      // La lógica del backend si funciona,requiere que se le pasen todas las props menos la de id_notas.
      
      try {
        // if(id_notas){
          // console.log('entro en el if');
          const res = await TraerNotas.ModificarNota(editarNota, { id_usuarios, id_notas });
          // const res = await TraerNotas.ModificarNota(editarNota);
          console.log('res', res);
          const data = await res.json(); 
          console.log('DATA:', data);
          // setNuevaNota(data);
          setEditarNota(TraerNotas.infoNota);
        //   if (data.id_notas === 0){
        //       // console.log('No hay params iguales a los id de las notas');
        //       setEditarNota(editarNota.titulo, editarNota.cuerpo );
        //       // console.log('setNuevaNota:',setNuevaNota(TraerNotas.infoNota))
        //   }
          history(`/notas/mostrar-notas/${id_usuarios}/`)
        // }
      }catch(error){
        console.log(error);
      }
  };

  // const handleInputChange = (e) =>{
  //   setEditarNota({...editarNota, [e.target.name]: e.target.value});
  //   // console.log('name:',e.target.name);
  //   // console.log('value:',e.target.value);
  //   // console.log('nuevaNota',nuevaNota)
  // };

  return (
    <>
      <NavBar/>
      <h2>EDITA TU NOTA</h2>
      <h4>Numero de identificación de Usuario: {id_usuarios}</h4>
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
            // onChange = { (e) => handleInputChange()}
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
            // onChange = { (e) => handleInputChange()}
          ></textarea>
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Numero de identificación de Usuario
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Numero de identificación de Usuario"
            name="id_usuarios"
            value = {editarNota.id_usuarios = id_usuarios}
            // onChange = { (e) => handleInputChange()}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary" >
          Guardar Cambios...
        </button>
      </form>
    </>
  )
};