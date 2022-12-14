// Traer 1 usuario
const URL_TRAER_UNA_NOTA = "http://127.0.0.1:8000/notas/tu-nota/1/12/";

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