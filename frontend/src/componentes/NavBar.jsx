import React from "react";
import { Link, useParams } from "react-router-dom";

export function NavBar() {
  const { id_usuarios } = useParams();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light" id="nav">
        <div className="container-fluid">
          <li className="nav-link active">
            <Link
              aria-current="page"
              to={`/notas/mostrar-notas/${id_usuarios}/`}
            >
              <p className="nombrePag">TU BLOCK DE NOTAS</p>
            </Link>
          </li>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

        <div className="container-buttons-nav">  
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-link active">
                <button className="btn btn-dark">
                  <Link aria-current="page" to="/">
                    Iniciar Sesion
                  </Link>
                </button>
              </li>

              <li className="nav-link active">
                <button className="btn btn-dark">
                  <Link
                    aria-current="page"
                    to={`/notas/mostrar-notas/${id_usuarios}/`}
                  >
                    Mis Notas
                  </Link>
                </button>
              </li>

              <li className="nav-link active">
                <button className="btn btn-dark">
                  <Link
                    aria-current="page"
                    to={`/notas/crear-nota/${id_usuarios}/`}
                  >
                    Nueva Nota
                  </Link>
                </button>
              </li>

              <li className="nav-link active">
                <button className="btn btn-dark">
                  <Link aria-current="page" to="/">
                    Cerrar Sesion
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </nav>
    </>
  );
}
