import React, { useState } from "react";
// , useEffect
import { useParams, useNavigate } from "react-router-dom";
import * as TraerNotas from "../../ServiciosApi/TraerNotas";
// Import barra de navegación
import { NavBar } from "../NavBar";

// import css
import "../../hoja-de-estilos/CrearNota.css";

export function CrearNota() {
  
  // useNavigate
  const history = useNavigate();
  
  // useParams
  const { id_usuarios } = useParams();

  // useState
  const [nuevaNota, setNuevaNota] = useState(TraerNotas.infoNota);

  const handleSubmit = async (e) => {
    console.log("HANDLESUBMIT:", nuevaNota);
    e.preventDefault();

    try {
      if (id_usuarios) {
        console.log("id_usuarios EXISTE");
        const res = await TraerNotas.crearNotas(nuevaNota);
        console.log("RES:", res);
        const data = await res.json();
        console.log("DATA:", data);
        // setNuevaNota(data);
        if (data.id_notas !== 0) {
          setNuevaNota(TraerNotas.infoNota);
          history(`/notas/mostrar-notas/${id_usuarios}/`)
        }
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setNuevaNota({ ...nuevaNota, [e.target.name]: e.target.value });
  };

  return (
    <>
      <NavBar />
      <section>
        <h2>CREA TU NOTA</h2>
        <h4>
          Tu Número Identificador <br></br> de Usuario es: {id_usuarios}
        </h4>
        <div className="container" id="container-form-crear-nota">
          <form onSubmit={handleSubmit} id="form-crear-nota">
            <label htmlFor="exampleFormControlInput10" className="form-label">
              Titulo Nota
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput10"
              placeholder="Elige tu Titulo"
              name="titulo"
              value={nuevaNota.titulo}
              onChange={handleInputChange}
            ></input>

            <label htmlFor="exampleFormControlTextarea8" className="form-label">
              Texto
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea8"
              rows="3"
              placeholder="Desarrolla tu nota..."
              name="cuerpo"
              value={nuevaNota.cuerpo}
              onChange={handleInputChange}
            ></textarea>
            <div className="container-boton-identificador">
              <div className="input-identificador">
                <label
                  htmlFor="exampleFormControlNumber9"
                  className="form-label"
                >
                  Identificador de Usuario
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlNumber9"
                  rows="3"
                  placeholder="Introduce tu número de ID de usuario..."
                  name="id_usuarios"
                  value={(nuevaNota.id_usuarios = id_usuarios)}
                  onChange={handleInputChange}
                ></input>
              </div>
              <button type="submit" className="btn btn-dark" id="button-crear-nota">
                Crear Nota
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
