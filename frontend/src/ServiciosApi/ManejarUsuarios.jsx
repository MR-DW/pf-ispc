
export const usuarioInfo = [
  {
  "password": "password",
  "id_usuarios": 0,
  "username": "username",
  "email": "email@email.com",
  "nombre": "nombre",        
  "apellido": "apellido",
  "last_login": null,
  "is_superuser": false
  },
];


// Traer 1 usuario
// const URL_TRAER_UN_USUARIO = "http://127.0.0.1:8000/usuario/tu-usuario/";
const URL_TRAER_UN_USUARIO = "http://127.0.0.1:8000/usuario/tu-usuario/1/";

// export const getUnUsuario = async ({ id_usuarios }) => {
export const getUnUsuario = async () => {
  return fetch(
    // API_URL,
    URL_TRAER_UN_USUARIO,
    // `${URL_TRAER_UN_USUARIO}${id_usuarios}/`,
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
  }
  );
};


// API PARA CREAR UN USUARIO
const URL_CREAR_USUARIO = "http://127.0.0.1:8000/usuario/registrar-usuario/";

export const crearUsuario = (nuevoUsuario) => {

    return fetch(
    URL_CREAR_USUARIO,
    {method: 'POST',
    headers:{
      'Content-Type': 'application/json',
      'Date': 'YYYY-MM-DDThh:mm',
    },
    body:JSON.stringify({
        "password": String(nuevoUsuario.password).trim(),
        "id_usuarios": Number(nuevoUsuario.id_usuarios_id),
        "username": String(nuevoUsuario.username).trim(),
        "email": String(nuevoUsuario.email).trim(),
        "nombre": String(nuevoUsuario.nombre).trim(),        
        "apellido": String(nuevoUsuario.apellido).trim(),
        "last_login": Date(nuevoUsuario.last_login),
        "is_superuser": Boolean(nuevoUsuario.is_superuser)
    }),
  }
  );
};