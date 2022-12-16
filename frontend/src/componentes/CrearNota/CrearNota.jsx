import React, {useState } from "react";
// , useEffect
import { useParams } from 'react-router-dom'
import * as TraerNotas from '../../ServiciosApi/TraerNotas'
// Import barra de navegación
import { NavBar } from "../NavBar";
// Import manejador de links
// import { Link } from "react-router-dom";

export function CrearNota() {

  // console.log(ListadoDeNotas.nota)
  // var history = useNavigate();
  // const usuario = useParams();
  // const {id_usuarios } = useParams();
  // console.log('id_usuarios', id_usuarios)
  var params = useParams();
  console.log('params', params)

   // useState
  const [nuevaNota, setNuevaNota] = useState(TraerNotas.infoNota);

  
  var res;
  const handleSubmit = async (e) => {
      console.log('HANDLESUBMIT:', nuevaNota);
      e.preventDefault();
   
      try {
        if(!params.id_notas){
        // if(!usuario.id_notas){
          console.log('Entra en params.id_notas NO EXISTE');
          res = await TraerNotas.crearNotas(nuevaNota);
          console.log('RES:', res);
          const data = await res.json(); 
          console.log('DATA:', data);
          // setNuevaNota(data);
          if (data.id_notas !== 0){
              setNuevaNota(TraerNotas.infoNota);
          }
          // history(`/notas/mostrar-notas/${id_usuarios}/`)
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
      <NavBar/>
      <h2>CREA TU NOTA</h2>
      {/* <h4>Tu Número Identificador de Usuario es: {id_usuarios}</h4> */}
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
          {/* <Link aria-current="page" to={`/notas/mostrar-notas/${id_usuarios}/`}> 
            Crear Nota
          </Link> */}
        </button>
      </form>
    </>
  )
};