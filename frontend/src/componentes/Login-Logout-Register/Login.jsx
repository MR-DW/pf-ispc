import React from "react";
// Import useState para manejar estados
import { useState } from "react";
// Import useParams
// import { useParams } from "react-router-dom";
// Import manejador de links
import { Link } from "react-router-dom";
// Import Server con servicios apis.
import * as ManejarUsuarios from "../../ServiciosApi/ManejarUsuarios";
// Import hoja-de-estilos Css
import "../../hoja-de-estilos/login.css";
// importar imagen
import cuaderno from "../../imagenes/cuaderno.png";

export function Login() {
  // useParams
  // const { id_usuarios } = useParams();
  // console.log(id_usuarios)

  //   useState
  const [usuario, setUsuario] = useState();
  // console.log('usuario',usuario)

  // logica para enviar formulario
  const handleSubmit = async (e) => {
    console.log("ejecuta el submit");
    e.preventDefault();
    try {
      // console.log("hola");

      // IMPORTANTE
      
      // Al querer utilizar el consumo de la api de manera dinamica, obteniendo con el uso de un useParams el id_usuario, si lo utilizo,
      // cuando realizo el consumo de la api no puede traerme el usuario en formato json, porlo que no se puede continuar con el login.
      // En cambio al utilizar una ruta api estatica, donde ya le paso el id_del usuario que deseo traer, toda la logica funciona correctamente.
      // Revisar el server.
      
      // const res = await ManejarUsuarios.getUnUsuario({ id_usuarios });
    
      const res = await ManejarUsuarios.getUnUsuario();
      console.log("Response", res);
      const data = await res.json();
      console.log("Data", data);
      // le paso al seter de valores de la var, el nuevo estado(valores) que se lo brinda el consumo de la api.  useState
      setUsuario(data);
      console.log("usuarios", usuario);
      // setSuccess();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!usuario ? (
        <section>
          <h1>Ingresa a tu Block de Notas</h1>
          <hr></hr>

          <div className="container" id="container-login">
            <img
              src={cuaderno}
              alt="imagen de un cuaderno"
              title="Logo de la app"
            />

            <form onSubmit={handleSubmit}>
              <label htmlFor="mail">Mail:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={usuario}
                // onChange = {handleInputChange}
                required
              />

              <label htmlFor="mail">Username:</label>
              <input
                type="text"
                name="username"
                id="username"
                value={usuario}
                // onChange = {handleInputChange}
                required
              />

              <label htmlFor="password">Contrase??a:</label>
              <input
                type="password"
                name="password"
                id="password"
                value={usuario}
                // onChange = {handleInputChange}
                required
              />

              <button className="btn btn-dark" type="submit">
                Ingresar
              </button>
              <button className="btn btn-dark">
                <Link aria-current="page" to={`/usuario/registrar-usuario/`}>
                  Registrarse...
                </Link>
              </button>
            </form>

            {/* Link para registrarse */}
          </div>
        </section>
      ) : (
        <section>
          <h1>
            Bienvenido {usuario.nombre} {usuario.apellido} a tu Block de Notas
          </h1>
          <div className="container" id="container-bienvenido">
            <hr></hr>
            <h2>??C??mo utilizar la aplicaci??n?</h2>
            <p>
              1 - Visualizar todas las notas creadas: Podras acceder a esta
              pantalla desde mis notas o desde el logo de la pagina. All?? se
              listaran todas tus notas.
              <br></br>
              <br></br>2 - Viasualizar una nota: Podras acceder haciendo clink
              en el boton VER NOTA... ubicado debajo de cada nota en el listado
              de notas.
              <br></br>
              <br></br>3 - Modificar o Eliminar una nota: Una vez dentro de tu
              nota individual podras editarla o eliminarla seg??n desees,
              apretando el boton correspondiente. Los mismos estan por debajo de
              la nota.
              <br></br>
              <br></br>4 - Editar nota: En esta pantalla podr??s editar tu nota,
              cambiando su t??tulo o cuerpo y pudiendo guardar nuevos datos.
              Luego de guardar los cambios apretando el bot??n correspondiente,
              se te redirijir?? a la pantalla para visualizar todas las notas
              creadas.
              <br></br>
              <br></br>5 - Crear una nota: Esta pantalla cuenta con su propio
              link en la barra de navegaci??n, la misma te permite crear una
              nueva nota, introduciendo su t??tulo y cuerpo de la nota. Deberas
              ingresar tu n??mero de identificaci??n de usuario:{" "}
              <b>{usuario.id_usuarios}</b>
            </p>
            <div id="contenedor-h4-boton">
              <h4>
                Tu N??mero Identificador de Usuario es: {usuario.id_usuarios}
              </h4>
              <button className="btn btn-dark" id="boton-ver-nota">
                <Link
                  className="link"
                  aria-current="page"
                  to={`/notas/mostrar-notas/${usuario.id_usuarios}/`}
                >
                  Ver Nota
                </Link>
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
