import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import * as ManejarUsuarios from "../../ServiciosApi/ManejarUsuarios";
// import { RegistrarUsuario } from "./RegistrarUsuario";

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
          <button>
                <Link aria-current="page" to={`/registrar-usuario`}> 
                  Registrarse...
                </Link>
          </button>
            
        </section>
        
        
          
      ) : (
        <section>
          <h1>Bienvenido {usuario.nombre} {usuario.apellido} a tu Block de Notas</h1>
          <hr></hr>
          <h2>¿Cómo utilizar la aplicación?</h2>
          <p>
          1 - Login de usuario: Te solicita mail y contraseña para poder ingresar, si las mismas son incorrectas permaneceras en la pantalla de Login, sí es correcta te redirigirá a la pantalla de Bienvenida. Esta pantalla cuenta con un botón para poder registrarte como usuario, el mismo te redirije a la pantalla correspondiente para tal fin.
          <br></br>
          <br></br>
          2 - Registro de usuario: Te solicita una serie de datos (Nombre, Apellido, Mail, Nombre de Usuario y Contraseña). Luego de completar todos los campos podrás registrarte haciendo click en el botón que está por debajo del formulario. Luego te redirijirá a la pantalla de Login para que puedas iniciar sesion con tu cuenta.
          <br></br>
          <br></br>
          3 - Pantalla de bienvenida y tutorial de uso de la app: La pantalla te recibe con tu nombre y apellido, además cuenta con una breve introducción al uso de la aplicación.
          <br></br>
          <br></br>
          4 - Visualizar todas las notas creadas: En esta pantalla, podrás encontrar todas las notas creadas por el usuario, la misma muestra el titulo y cuerpo de la nota. Cuenta con un botón para poder acceder a la nota y visualizarla con mayor detalle en otra pantalla.
          <br></br>
          <br></br>
          5 - Viasualizar una nota y borrar una nota. : Aquí podrás observar una nota creada por el usuario con mayor detalle, en la misma contarás con dos botones, uno para eliminar la nota y el otro para editar la misma.
          <br></br>
          <br></br>
          6 -  Editar nota: En esta pantalla podrás editar tu nota, cambiando su título o cuerpo y pudiendo guardar nuevos datos. Luego de guardar los cambios apretando el botón correspondiente, se te redirijirá a la pantalla para visualizar todas las notas creadas.
          <br></br>
          <br></br>
          7 - Crear una nota: Esta pantalla cuenta con su propio link en la barra de navegación, la misma te permite crear una nueva nota, introduciendo su título y cuerpo de la nota.
          </p>
        </section>
      )}
      
    </>
  );
}
