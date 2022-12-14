import React from "react";
import { useState } from "react";

import * as ManejarUsuarios from "../../ServiciosApi/ManejarUsuarios";
import { RegistrarUsuario } from "./RegistrarUsuario";

export function Login() {
  // useRef
  // const usuarioRef = useRef();
  // const errRef = useRef();

  //   useState
  const [usuario, setUsuario] = useState();
  // const [pwd, setPwd] = useState('');
  // // password, setPassword

  // Mensaje de erro
  // const [errMsg, setErrMsg] = useState('');

  // const [success, setSuccess] = useState();
  // // Exito

  //   useEFFECT
  // useEffect(() => {
  //   usuarioRef.current.focus();
  // }, []);

  // useEffect(() => {
  //   setErrMsg('');
  // }, [usuario, pwd]);

  // logica para enviar formulario
  const handleSubmit = async (e) => {
    console.log("ejecuta el submit");
    e.preventDefault();
    try {
      const res = await ManejarUsuarios.getUnUsuario();
      console.log(res);
      const data = await res.json();
      console.log(data);
      // const { id_notas, titulo, cuerpo, id_usuarios } = data.verNota;
      // le paso al seter de valores de la var, el nuevo estado(valores) que se lo brinda el consumo de la api.  useState
      setUsuario(data);
      // setSuccess();
    } catch (error) {
      console.log(error);
    }
  };
  // Con el setSucces le digo que la operacion fue exitosa si o si.

  return (
    <>
      {!usuario ? (
        <section>
          {/* <p
           ref={errRef}
           className={errMsg ? "errmsg" : "offscreen"}
           aria-live="assertive">
           {errMsg}
         </p> */}

          <h1>Ingresa a tu Block de Notas</h1>

          <form onSubmit={handleSubmit}>
            <label htmlFor="mail">Mail:</label>
            <input
              type="email"
              name="mail"
              id="mail"
              //  ref={usuarioRef}
              //  onChange={(e) => setUsuario(e.target.value)}
              //  value={usuario}
              required
            />

            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              name="password"
              id="password"
              //  onChange={(e) => setPwd(e.target.value)}
              //  value={usuario}
              required
            />

            <button type="submit">Ingresar</button>
          </form>

          {/* Link para registrarse */}
          <p>
            Registrate...
            <span className="line">
              {/* <a href="#">Aquí</a> */}
            </span>
          </p>
        </section>
          
      ) : (
        <section>
          <h1>Bienvenido {usuario.nombre} {usuario.apellido} a tu Block de Notas</h1>
          {/* <p>
            <a href="#">Ir al menu</a>
          </p> */}
        </section>
      )}
      <RegistrarUsuario />
    </>
  );
}
