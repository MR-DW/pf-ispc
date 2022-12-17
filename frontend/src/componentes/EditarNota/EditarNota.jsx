import React, { useState } from "react";
// , useEffect
import { useParams } from "react-router-dom";
// Import de server
import * as TraerNotas from "../../ServiciosApi/TraerNotas";
// Import de barra de navegacion
import { NavBar } from "../NavBar";
// Import css
import '../../hoja-de-estilos/CrearNota.css'

// VER PORQUE NO FUNCIONA
export function EditarNota() {
  // useParams para ruta dinamica
  const { id_usuarios, id_notas } = useParams();
  // console.log(id_usuarios, id_notas);
  // console.log(useParams());

  // useState
  const [editarNota, setEditarNota] = useState(TraerNotas.infoNota);

  const handleSubmit = async (e) => {
    console.log("HANDLESUBMIT:", editarNota);
    e.preventDefault();

    // IMPORTANTE
    // Error en consola BAD REQUEST DATA devuelve que no se encuentra mi nota
    // setEditarNota no setea los valores de editNota por lo que titulo y cuerpo se pasan a la api vacio (undefined).

    try {
      // if(id_notas){
      // console.log('entro en el if');
      const res = await TraerNotas.ModificarNota(editarNota, {
        id_usuarios,
        id_notas,
      });
      // const res = await TraerNotas.ModificarNota(editarNota);
      console.log("res", res);
      const data = await res.json();
      console.log("DATA:", data);
      // setNuevaNota(data);
      setEditarNota(TraerNotas.infoNota);
      //   if (data.id_notas === 0){
      //       // console.log('No hay params iguales a los id de las notas');
      //       setEditarNota(editarNota.titulo, editarNota.cuerpo );
      //       // console.log('setNuevaNota:',setNuevaNota(TraerNotas.infoNota))
      //   }
      // history(`/notas/mostrar-notas/${id_usuarios}/`)
      // }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setEditarNota({ ...editarNota, [e.target.name]: e.target.value });
    //   // console.log('name:',e.target.name);
    //   // console.log('value:',e.target.value);
    //   // console.log('nuevaNota',nuevaNota)
  };

  return (
    <>
      <NavBar />
      <section>
        <h2>EDITA TU NOTA</h2>
        <h4>
          Numero de identificación <br></br> de Usuario: {id_usuarios}
        </h4>
        <div className="container" id="container-form-crear-nota">
          <form onSubmit={handleSubmit} id="form-crear-nota">
            <label htmlFor="exampleFormControlInput11" className="form-label">
              Titulo Nota
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput11"
              placeholder="Elige tu Titulo"
              name="titulo"
              value={editarNota.titulo}
              onChange={(e) => handleInputChange()}
            ></input>

            <label
              htmlFor="exampleFormControlTextarea12"
              className="form-label"
            >
              Texto
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea12"
              rows="3"
              placeholder="Desarrolla tu nota..."
              name="cuerpo"
              value={editarNota.cuerpo}
              onChange={(e) => handleInputChange()}
            ></textarea>
            <div className="container-boton-identificador">
              <div className="input-identificador">
                <label
                  htmlFor="exampleFormControlNumer13"
                  className="form-label"
                >
                  Numero de identificación de Usuario
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlNumer13"
                  placeholder="Numero de identificación de Usuario"
                  name="id_usuarios"
                  value={(editarNota.id_usuarios = id_usuarios)}
                  onChange={(e) => handleInputChange()}
                ></input>
              </div>
              <button type="submit" className="btn btn-dark" id="button-crear-nota">
                Guardar Cambios
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
