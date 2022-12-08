import React from 'react'

export function CrearNota() {













    
  return (
    <div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Titulo Nota</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Titulo"></input>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Texto</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Desarrolla tu nota..."></textarea>
        </div>
        <button type="button" class="btn btn-primary">Crear Nota</button>
    </div>
  )
}
 