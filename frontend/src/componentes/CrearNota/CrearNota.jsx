import React from "react";

export function CrearNota() {
  return (
    <>
      <div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Titulo Nota
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Titulo"
          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Texto
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Desarrolla tu nota..."
          ></textarea>
        </div>
        <button type="button" className="btn btn-primary">
          Crear Nota
        </button>
      </div>
    </>
  );
}
