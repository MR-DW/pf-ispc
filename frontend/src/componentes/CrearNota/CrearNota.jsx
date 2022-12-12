import React, {useState, useEffect } from "react";
import * as TraerNotas from '../../ServiciosApi/TraerNotas'

export function CrearNota() {

   // useState
  // const initial = {
  //   'id_notas':0,
  //   'titulo':'Titulo',
  //   'cuerpo':'Aquí se desarrolla tu nota',
  //   'id_usuarios':0
  // };
  const [nuevaNota, setNuevaNota] = useState(TraerNotas.infoNota);
  // console.log(nota)
  
  // Funcion para traer notas
  const crearNuevaNota = async () => {
    try{
      const res = await TraerNotas.crearNotas();
      const data = await res.json();
      console.log(data);
      
      // le paso al seter de valores de la var, el nuevo estado(valores) que se lo brinda el consumo de la api.  useState
      // setNuevaNota(data);
      const { titulo, cuerpo } = data.nuevaNota;
      setNuevaNota({ titulo, cuerpo });
    } catch(error){
            console.log(error);
      }
  };

  // useEffect
  // useEffect(() => {
  //   crearNuevaNota();
  // }, []);

  const handleClick = (e) => {
      setNuevaNota({ ...nuevaNota, [e.target.name]: e.target.value });
      crearNuevaNota();
  };
  
  
    // const card = document.getElementById('card');
  
    // card.addEventListener('load', () => {
 

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
            placeholder="Elige tu Titulo"
            value={nuevaNota.titulo}
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
            value={nuevaNota.cuerpo}
          ></textarea>
        </div>
        <button type="button" className="btn btn-primary"  onClick={handleClick} >
          Crear Nota
        </button>
      </div>
    </>
  )
};
