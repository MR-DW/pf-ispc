import React, {useState } from "react";
// , useEffect
import { useNavigate, useParams } from 'react-router-dom'
import * as ManejarUsuarios from '../../ServiciosApi/ManejarUsuarios'

export function RegistrarUsuario() {

  // console.log(ListadoDeNotas.nota)
  var history = useNavigate();
  var params = useParams();

   // useState
  const [nuevoUsuario, setNuevoUsuario] = useState(ManejarUsuarios.usuarioInfo);

  
  var res;
  const handleSubmit = async (e) => {
    //   console.log('HANDLESUBMIT:', nuevoUsuario);
      e.preventDefault();
   
      try {
        if(!params.id_usuarios){
        //   console.log('Entra en params.id_notas NO EXISTE');
          res = await ManejarUsuarios.crearUsuario(nuevoUsuario);
          console.log('RES:', res);
          const data = await res.json(); 
          console.log('DATA:', data);
          // setNuevaNota(data);
          if (data.id_usuarios !== 0){
            setNuevoUsuario(ManejarUsuarios.usuarioInfo);
          }
          history('/login')
        }
      }catch(error){
        console.log(error);
      }
  };

  const handleInputChange = (e) =>{
    setNuevoUsuario({...nuevoUsuario, [e.target.name]: e.target.value});
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Nombre..."
            name="nombre"
            value = {nuevoUsuario.nombre}
            onChange = {handleInputChange}
          ></input>
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Apellido:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Apellido..."
            name="apellido"
            value = {nuevoUsuario.apellido}
            onChange = {handleInputChange}
          ></input>
        </div>
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput3" className="form-label">
            Email:
          </label>
          <input
            className="form-control"
            id="exampleFormControlInput3"
            type="email"
            placeholder="Mail..."  
            name="email"
            value={nuevoUsuario.email}
            onChange = {handleInputChange}
          ></input>
         <label htmlFor="exampleFormControlInput4" className="form-label">
            Username:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlTextarea4"
            placeholder="Nombre de Usuario..."  
            name="username"
            value={nuevoUsuario.username}
            onChange = {handleInputChange}
          ></input>
           <label htmlFor="exampleFormControlInput1" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Contraseña..."  
            name="password"
            value={nuevoUsuario.password}
            onChange = {handleInputChange}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary" >
          REGISTRARSE
        </button>
      </form>
    </>
  )
}