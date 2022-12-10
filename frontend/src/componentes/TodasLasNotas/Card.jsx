import React from 'react'
import {render} from '@testing-library/react'
import * as TraerNotas from '../../ServiciosApi/TraerNotas'
import { useEffect, useState } from 'react';
// useEffect,
// import { data } from 'cypress/types/jquery';

export function Card(){

   // useState
  // const initial = {
  //   'id_notas':0,
  //   'titulo':'Titulo',
  //   'cuerpo':'Aquí se desarrolla tu nota',
  //   'id_usuarios':0
  // };
  const [nota, setNotas] = useState([]);
  // console.log(nota)
  
  // Funcion para traer notas
  const MostrarNotas = async () => {
    try{
      const res = await TraerNotas.getNotas();
      // console.log(res);
      const data = await res.json();
      // console.log(data);
      // var titulo = data.titulo;
      // var cuerpo = data.cuerpo;
      
      // le paso al seter de valores de la var, el nuevo estado(valores) que se lo brinda el consumo de la api.  useState
      setNotas(data);
      // setNotas({ titulo, cuerpo });
    } catch(error){
            console.log(error);
      }
  };
  // MostrarNotas();

  // useEffect
  useEffect(() => {
    MostrarNotas();
  }, []);

  // const handleChange = (e) => {
  //   setNotas({ ...nota, [e.target.name]: e.target.value });
  //   MostrarNotas();
  //   // const card = document.getElementById('card');
  
  //   // card.addEventListener('load', () => {
  //   //   MostrarNotas();
  //   // })
  // }

  render (
    <div>
        <div className="card" id='card'>
            <div className="card-body">
                {/* { !notas ? 'Cargando...' : notas.map((nota, index) => { */}
                  {/* // return   */}
                <h5 className="card-title" >{nota.titulo} </h5>
                {/* }) } */}
                {/* //onChange={handleChange} */}
                
                <p className="card-text" >{nota.cuerpo}</p>
                {/* // onLoad={handleLoad} */}
                <button type="button" className="btn btn-primary" >Ver Nota</button>
            </div>
        </div> 
    </div>
  )
};
