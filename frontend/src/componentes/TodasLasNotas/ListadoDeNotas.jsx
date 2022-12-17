import React from "react";
// import {render} from '@testing-library/react'
import * as TraerNotas from "../../ServiciosApi/TraerNotas";
import { useEffect, useState } from "react";
// import css
import "../../hoja-de-estilos/Listado-de-notas.css";

// import link para dirigirme a una nota especifica. y poder editarla.
import { Link } from "react-router-dom";
// import useParams
import { useParams } from "react-router-dom";

export function ListadoDeNotas() {
  // useParams
  const { id_usuarios } = useParams();

  // useState
  const [nota, setNotas] = useState([]);
  // Funcion para traer notas
  const MostrarNotas = async () => {
    try {
      const res = await TraerNotas.getNotas({ id_usuarios });
      console.log(res);
      const data = await res.json();
      console.log(data);
      setNotas(data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect
  useEffect(() => {
    MostrarNotas();
  }, []);

  return (
    <section>
      <h2 className="titulo" >Lista De Notas</h2>
      <div id="container-notas" className="container row">
        
        {!nota
          ? "No tienes notas"
          : nota.map((nota) => {
              return (
                <div className="card col-3" id="card" key={nota.id_notas}>
                  <div className="card-body">
                    <h5 className="card-title">{nota.titulo}</h5>
                    <hr></hr>
                    <p className="card-text">{nota.cuerpo}</p>
                    <button type="button" className="btn btn-dark">
                      <Link
                        aria-current="page"
                        to={`/notas/tu-nota/${nota.id_usuarios}/${nota.id_notas}/`}
                      >
                        Ver Nota
                      </Link>
                    </button>
                  </div>
                </div>
              );
            })}
      </div>
    </section>
  );
}
