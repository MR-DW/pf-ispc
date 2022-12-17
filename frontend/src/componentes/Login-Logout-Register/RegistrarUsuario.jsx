import React, { useState } from "react";
// , useEffect
import { useNavigate, useParams } from "react-router-dom";
import * as ManejarUsuarios from "../../ServiciosApi/ManejarUsuarios";

export function RegistrarUsuario() {
  
  var history = useNavigate();
  var params = useParams();
  // console.log("params:", params);
  // console.log("useParams:", useParams());

  // useState
  const [nuevoUsuario, setNuevoUsuario] = useState(ManejarUsuarios.usuarioInfo);
  // console.log('usuarioinfo:',ManejarUsuarios.usuarioInfo);
  // console.log('nuevoUsuario',nuevoUsuario);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!params.id_usuarios) {
        //   console.log('Entra en params.id_notas NO EXISTE');
        // console.log("nuevoUsuario:", nuevoUsuario);
        const res = await ManejarUsuarios.crearUsuario(nuevoUsuario);
        // console.log("RES:", res);
       
        const data = await res.json();
        // console.log('DATA:', data);
        // me muestra en consola un json que contiene la prop last_login y me indica que el formato de la fehca es incorrecto,
        //  mi duda es porque me asigna un formato de fecha, si su estado inical de la prop last_login es null, como puedo hacer para que se mantenga asi. 
        // Creo que al no coincidir los formatos de DATATIME entre el front y back sumado a la base de datos, no permite realiar la peticion de la api.
        // Ya que creo un usuario desde api rest de django me permite crear el usuario.
        // Esto muestra la consola con el console.log de arriba --> console.log('DATA:', data);
        // DATA: 
        // {last_login: Array(1)}
        // last_login
        // : 
        // ['Fecha/hora con formato erróneo. Use uno de los sig… YYYY-MM-DDThh:mm[:ss[.uuuuuu]][+HH:MM|-HH:MM|Z].']
        // [[Prototype]]
        // : 
        // Object
        if (data.id_usuarios !== 0) {
          // console.log('hola')
          // console.log('set1:', setNuevoUsuario(ManejarUsuarios.usuarioInfo))
          setNuevoUsuario(data);
          // console.log('set2:', setNuevoUsuario(data))
        }
        history("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setNuevoUsuario({ ...nuevoUsuario, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2>CREA TU USUARIO</h2>
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
            value={nuevoUsuario.nombre}
            onChange={handleInputChange}
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
            value={nuevoUsuario.apellido}
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          REGISTRARSE
        </button>
      </form>
    </>
  );
}
