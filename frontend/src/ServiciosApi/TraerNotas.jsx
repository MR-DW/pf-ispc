
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
// Ver de poner un metodo map.
// var num = [];
// {num.map((num) => {
  // return(
  const URL_GET_NOTAS = `http://127.0.0.1:8000/notas/mostrar-notas/2/`;

  // )}
// )};

export const getNotas = async () => {
  return await fetch(URL_GET_NOTAS)
  //   // URL_CREAR_NOTAS,
    // {method: 'GET',
    // headers:{
    //   'Content-type':'application/json'
    // },
    // mode: 'no-cors',
  //   body: JSON.stringify({
  //     id_notas: Number(newNota.id_notas),
  //     titulo: String(newNota.titulo).trim(),
  //     cuerpo: String(newNota.cuerpo).trim(),
  //     // id_usuarios: Number(newNota.id_usuarios_id)
  //   })
  // }
};

// API PARA TRAER UNA NOTA
const URL_TRAER_UNA_NOTA = "http://127.0.0.1:8000/notas/tu-nota/2/8/";

export const getUnaNota = async () => {
  return fetch(
    // API_URL,
    URL_TRAER_UNA_NOTA,)
//     {method: 'GET',
//     headers:{
//       'Content-type':'application/json'
//     },
//     // mode: 'no-cors',
//     body: JSON.stringify({
//       // id_notas: Int(newNota.id_notas),
//       titulo: String(unaNota.titulo).trim(),
//       cuerpo: String(unaNota.cuerpo).trim(),
//       // id_usuarios: Number(unaNota.id_usuarios)
//     })
//   });
};

// API PARA EDITAR NOTA
const URL_EDITAR_NOTA = "http://127.0.0.1:8000/notas/editar-nota/<int:pk2>/<int:pk>/";
export const ModificarNota = async (editarNota) => {
  return await fetch(
    URL_EDITAR_NOTA,
    {method: 'PUT',
    // headers:{
    //   'Content-type':'application/json'
    // },
    // mode: 'no-cors',
    body: JSON.stringify({
      // id_notas: Int(newNota.id_notas),
      titulo: String(editarNota.titulo).trim(),
      cuerpo: String(editarNota.cuerpo).trim(),
      // id_usuarios: Number(Nota.id_usuarios)
    })
  }
    );
}
// VER PORQUE LA RES DEL COMPONENTE QUE CONSUME LA API EDITANOTA NO PONE EL ID_NOTA.

// API PARA BORRAR UNA NOTA
const URL_BORRAR_NOTA = "http://127.0.0.1:8000/notas/borrar-nota/<int:pk2>/<int:pk>/";

export const EliminarNota = async () => {
  return fetch(
    // API_URL,
    URL_BORRAR_NOTA,
    {method: 'DELETE',
//     headers:{
//       'Content-type':'application/json'
//     },
//     // mode: 'no-cors',
//     body: JSON.stringify({
//       // id_notas: Int(newNota.id_notas),
//       titulo: String(unaNota.titulo).trim(),
//       cuerpo: String(unaNota.cuerpo).trim(),
//       // id_usuarios: Number(unaNota.id_usuarios)
//     })
  })
};
// VER PORQUE EL COMPONENTE QUE CONSUME LA API NO BORRA LA NOTA.

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
    body: JSON.stringify({
      // id_notas: Int(newNota.id_notas),
      titulo: String(newNota.titulo).trim(),
      cuerpo: String(newNota.cuerpo).trim(),
      id_usuarios: Number(newNota.id_usuarios)
    })
  });
};



