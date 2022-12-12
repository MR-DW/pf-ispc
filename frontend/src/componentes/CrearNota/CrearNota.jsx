import React, {useState } from "react";
// , useEffect
import { useNavigate, useParams } from 'react-router-dom'
import * as TraerNotas from '../../ServiciosApi/TraerNotas'
// import * as ListadoDeNotas from '../TodasLasNotas/ListadoDeNotas'

export function CrearNota() {

  // console.log(ListadoDeNotas.nota)
  // useParams - useNavigate
  var history = useNavigate();
  var params = useParams();

   // useState
  const [nuevaNota, setNuevaNota] = useState(TraerNotas.infoNota);

  
  var res;
  const handleSubmit = async (e) => {
      // console.log('A name was submitted: ' + this.state.value);
      console.log('HANDLESUBMIT:', nuevaNota);
      e.preventDefault();
   
      try {
        if(!params.id_notas){
          console.log('Entra en params.id_notas NO EXISTE');
          res = await TraerNotas.crearNotas(nuevaNota);
          console.log('RES:', res);
          const data = await res.json(); 
          console.log('DATA:', data);
          // setNuevaNota(data);
          if (data.id_notas !== 0){
              // console.log('No hay params iguales a los id de las notas');
              setNuevaNota(TraerNotas.infoNota);
              // console.log('setNuevaNota:',setNuevaNota(TraerNotas.infoNota))
          }
          history('/')
        }
      }catch(error){
        console.log(error);
      }
  };

  const handleInputChange = (e) =>{
    // this.setNuevaNota({value: e.target.value});
    setNuevaNota({...nuevaNota, [e.target.name]: e.target.value});
    // console.log('name:',e.target.name);
    // console.log('value:',e.target.value);
    // console.log('nuevaNota',nuevaNota)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Titulo Nota
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Elige tu Titulo"
            name="titulo"
            value = {nuevaNota.titulo}
            onChange = {handleInputChange}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Texto
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Desarrolla tu nota..."  
            name="cuerpo"
            value={nuevaNota.cuerpo}
            onChange = {handleInputChange}
          ></textarea>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Identificador de Usuario
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Introduce tu número de ID de usuario..."  
            name="id_usuarios"
            value={nuevaNota.id_usuarios}
            onChange = {handleInputChange}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary" >
          Crear Nota
        </button>
      </form>
    </>
  )
};


  // console.log(nota)
  // Funcion para guardar la nota en base de datos
  // const crearNuevaNota = async () => {
  //   try{
  //     const res = await TraerNotas.crearNotas();
  //     const data = await res.json();
  //     console.log(data);
  //     // le paso al seter de valores de la var, el nuevo estado(valores) que se lo brinda el consumo de la api.  useState
  //     // setNuevaNota(data);
  //     const { titulo, cuerpo } = data.nuevaNota;
  //     setNuevaNota({ titulo, cuerpo });
  //   } catch(error){
  //           console.log(error);
  //     }
  // };

   
  
    // const card = document.getElementById('card');
  
    // card.addEventListener('load', () => {

      // useEffect
  // useEffect(() => {
  //   crearNuevaNota();
  // }, []);