import React from "react";
// IMPORT LINK
import { Link } from "react-router-dom";

// Import Servicios api rest
import * as TraerNotas from "../../ServiciosApi/TraerNotas";

// Import componente barra de navegacion
import { NavBar } from "../NavBar";

// IMPORT COMPONENTE BORRAR NOTA
import { BorrarNota } from "../BorrarNota/BorrarNota";

// Import Css
import "../../hoja-de-estilos/TuNota.css";

// Import useState, useEffect
import { useState, useEffect } from "react";

// Import useParams
import { useParams } from "react-router-dom";

export function TuNota() {
  // useParams
  const { id_usuarios, id_notas } = useParams();
  console.log(id_usuarios, id_notas);
  console.log(useParams());

  // useState
  const [verNota, setVerNota] = useState([]);

  // Funcion para traer notas
  const MostrarUnaNota = async () => {
    try {
      const res = await TraerNotas.getUnaNota({ id_usuarios, id_notas });
      const data = await res.json();
      console.log("DATA:", data);
      setVerNota(data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect
  useEffect(() => {
    MostrarUnaNota();
  }, []);

  return (
    <>
      <NavBar />
      <section>
        <h2>TU NOTA</h2>
        <div id="container-tu-nota" className="container" key={verNota.id_notas}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{verNota.titulo}</h5>
              <hr></hr>
              <p className="card-text">{verNota.cuerpo}</p>
            </div>
          </div>

          <div className="button-div">
            <button type="button" className="btn btn-dark" id="button-editar">
              <Link
                aria-current="page"
                to={`/notas/editar-nota/${verNota.id_usuarios}/${verNota.id_notas}/`}
              >
                Editar
              </Link>
            </button>
            <BorrarNota />
          </div>

        </div>
      </section>
    </>
  );
}
