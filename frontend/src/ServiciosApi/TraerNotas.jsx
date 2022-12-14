
// INITIAL STATE
export const infoNota = [
  {
    'id_notas': 0,
    'titulo': "Titulo",
    'cuerpo': "Aquí se desarrolla tu nota",
    'id_usuarios': 0,
  },
];

// API PARA Listar todas las notas
const API_URL = "http://127.0.0.1:8000/notas/mostrar-notas/<int:pk>/";

export const getNotas = async () => {
  return await fetch(API_URL,
  //   // URL_CREAR_NOTAS,
    {method: 'GET',
    headers:{
      'Content-type':'application/json'
    },
    mode: 'no-cors',
  //   body: JSON.stringify({
  //     id_notas: Number(newNota.id_notas),
  //     titulo: String(newNota.titulo).trim(),
  //     cuerpo: String(newNota.cuerpo).trim(),
  //     // id_usuarios: Number(newNota.id_usuarios_id)
  //   })
  })
};


// API PARA CREAR UNA Nota
const URL_CREAR_NOTAS = "http://127.0.0.1:8000/notas/nueva-nota/";

export const crearNotas = (newNota) => {

  return fetch(
    // API_URL,
    URL_CREAR_NOTAS,
    {method: 'POST',
    headers:{
      'Content-type':'application/json'
    },
    // mode: 'no-cors',
    body: JSON.stringify({
      // id_notas: Int(newNota.id_notas),
      titulo: String(newNota.titulo).trim(),
      cuerpo: String(newNota.cuerpo).trim(),
      id_usuarios: Number(newNota.id_usuarios)
    })
  });
};

// API PARA TRAER UNA NOTA
const URL_TRAER_UNA_NOTA = "http://127.0.0.1:8000/notas/tu-nota/<int:pk2>/<int:pk>/";

export const getUnaNota = async (unaNota) => {
  return fetch(
    // API_URL,
    URL_TRAER_UNA_NOTA,
    {method: 'GET',
    headers:{
      'Content-type':'application/json'
    },
    // mode: 'no-cors',
    body: JSON.stringify({
      // id_notas: Int(newNota.id_notas),
      titulo: String(unaNota.titulo).trim(),
      cuerpo: String(unaNota.cuerpo).trim(),
      id_usuarios: Number(unaNota.id_usuarios)
    })
  });
};

// API PARA EDITAR / BORRAR UNA NOTA
const url_customNota = "http://127.0.0.1:8000/notas/custom-nota/:id_notas/";
export const customNota = async () => {
  return await fetch(url_customNota);
}



