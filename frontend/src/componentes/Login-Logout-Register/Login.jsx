import React from "react";
import { useRef, useState, useEffect } from "react";

export function Login() {
  // useRef
  const usuarioRef = useRef();
  const errRef = useRef();

  //   useState
  const [usuario, setUsuario] = useState('');
  const [pwd, setPwd] = useState('');
  // password, setPassword
  const [errMsg, setErrMsg] = useState('');
  // Mensaje de erro
  const [success, setSuccess] = useState();
  // Exito

  //   useEFFECT
  useEffect(() => {
    usuarioRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [usuario, pwd]);

  // logica para enviar formulario
  const handleSubmit = async (e) => {
    console.log('ejecuta el submit');
    // e.preventDeFault();
    console.log(usuario, pwd);
    // setUsuario('');
    // setPwd('');
    setSuccess(true);
    // Con el setSucces le digo que la operacion fue exitosa si o si.
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Bienvenido {usuario} a tu Block de Notas</h1>
          {/* <p>
            <a href="#">Ir al menu</a>
          </p> */}
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive">
            {errMsg}
          </p>

          <h1>Ingresa a tu Block de Notas</h1>

          <form onSubmit={handleSubmit}>
            <label htmlFor="mail">Mail:</label>
            <input
              type="email"
              name="mail"
              id="mail"
              ref={usuarioRef}
              onChange={(e) => setUsuario(e.target.value)}
              value={usuario}
              required
            />

            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />

            <button type="submit">Ingresar</button>
          </form>

          {/* Link para registrarse */}
          <p>
            Registrate...
            <span className="line">
              <a href="#">
                Aquí
              </a>
            </span>
          </p>
        </section>
      )}
    </>
  );
}
