import React, { useState } from 'react'
import {render} from '@testing-library/react'
import {getNota, infoNota} from '../../ServiciosApi/TraerNotas'



export function Card(){

  const [notas, setNota] = useState(infoNota);

  const mostrarNotas = () => {
  
    const res = getNota();
    const data = res.json();
    const { titulo, cuerpo } = data.notas;
    setNota({ titulo, cuerpo });
    
}

  render (
    <div>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{notas.titulo}</h5>
                <p class="card-text">{notas.cuerpo}</p>
                <button type="button" class="btn btn-primary" >Ver Nota</button>
            </div>
        </div> 
    </div>
  )
};
