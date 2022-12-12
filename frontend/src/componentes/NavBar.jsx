import React from "react";
import { Link } from 'react-router-dom';

export function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" to='/'>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            
            <ul className="navbar-nav">
              
              {/* <li className="nav-link active">    
                <Link aria-current="page" href="/personalizar-nota"> 
                 Notas
                </Link>
              </li> */}
              
              <li className="nav-link active">
                <Link aria-current="page" href="/crear-nota"> 
                Nueva Nota
                </Link>
              </li>
            
            </ul> 
          </div>
        </div>
      </nav>
    </>
  );
}
