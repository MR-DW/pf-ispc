// Traer 1 usuario
const URL_TRAER_UN_USUARIO = "http://127.0.0.1:8000/usuario/tu-usuario/2/";

export const getUnUsuario = async (usuario) => {
  return fetch(
    // API_URL,
    URL_TRAER_UN_USUARIO,
    {method: 'POST',
//     headers:{
//       'Content-type':'application/json'
//     },
//     // mode: 'no-cors',
    // body: JSON.stringify({
    //   id_usuarios_id: Number(usuario.id_usuarios_id),
    //   nombre: String(usuario.nombre).trim(),
    //   email: String(usuario.email).trim(),
    //   username: String(usuario.username).trim(),
    //   apellido: String(usuario.apellido).trim()
    // })
  });
};