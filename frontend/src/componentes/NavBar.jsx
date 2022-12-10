import React from "react";

export function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/frontend/src/componentes/TodasLasNotas/Card.jsx">
            TU BLOCK DE NOTAS
          </a>
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
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/* <a className="nav-link active" aria-current="page" href="#"> */}
                {/* Tus Notas */}
              {/* </a> */}
              {/* <a className="nav-link" href="#"> */}
                {/* Crear Notas */}
              {/* </a> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
