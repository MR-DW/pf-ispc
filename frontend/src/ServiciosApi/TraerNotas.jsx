
// INITIAL STATE
export const infoNota = [
  {
    "id_notas": 0,
    "titulo": "Titulo",
    "cuerpo": "Aquí se desarrolla tu nota",
    "id_usuarios": 0
  },
];

// API PARA Listar todas las notas
  const URL_GET_NOTAS = 'http://127.0.0.1:8000/notas/mostrar-notas/';


export const getNotas = async ({ id_usuarios }) => {
  return await fetch(
    `${URL_GET_NOTAS}${id_usuarios}/`)
};

// API PARA TRAER UNA NOTA
export const URL_TRAER_UNA_NOTA = "http://127.0.0.1:8000/notas/tu-nota/";

export const getUnaNota = async ({ id_usuarios, id_notas }) => {
  return await fetch(
    `${URL_TRAER_UNA_NOTA}${id_usuarios}/${id_notas}/`,
    {method: 'GET',
    headers:{
      'Content-type':'application/json'
    },
  });
};

// API PARA EDITAR NOTA
const URL_EDITAR_NOTA = "http://127.0.0.1:8000/notas/editar-nota/";

export const ModificarNota = async ({ id_usuarios, id_notas }) => {
  return await fetch(
    `${URL_EDITAR_NOTA}${id_usuarios}/${id_notas}/`,
    {method: 'PUT',
    body: JSON.stringify({
      titulo: String(id_notas.titulo).trim(),
      cuerpo: String(id_notas.cuerpo).trim(),
    })
  }
    );
}
// VER PORQUE LA RES DEL COMPONENTE QUE CONSUME LA API EDITANOTA NO PONE EL ID_NOTA.

// API PARA BORRAR UNA NOTA
const URL_BORRAR_NOTA = "http://127.0.0.1:8000/notas/borrar-nota/";

export const EliminarNota = async ({ id_usuarios, id_notas }) => {
  return fetch(
    // API_URL,
    `${URL_BORRAR_NOTA}${id_usuarios}/${id_notas}/`,
    {method: 'DELETE',
    headers:{
      'Content-type':'application/json'
    },
    // mode: 'no-cors',
    body: JSON.stringify({
      id_notas: Number(id_notas.id_notas),
      titulo: String(id_notas.titulo).trim(),
      cuerpo: String(id_notas.cuerpo).trim(),
      id_usuarios: Number(id_notas.id_usuarios)
    })
  })
};
// VER PORQUE EL COMPONENTE QUE CONSUME LA API NO BORRA LA NOTA.

// API PARA CREAR UNA Nota
const URL_CREAR_NOTAS = "http://127.0.0.1:8000/notas/nueva-nota/";

// export const crearNotas = (nuevaNota, {id_usuarios}) => {
export const crearNotas = (nuevaNota) => {

  return fetch(
    // API_URL,
    URL_CREAR_NOTAS,
    // `${URL_CREAR_NOTAS}${id_usuarios}`,
    {method: 'POST',
    headers:{
      'Content-type':'application/json'
    },
    body: JSON.stringify({
      // id_notas: Int(newNota.id_notas),
      titulo: String(nuevaNota.titulo).trim(),
      cuerpo: String(nuevaNota.cuerpo).trim(),
      id_usuarios: Number(nuevaNota.id_usuarios)
    })
  });
};



