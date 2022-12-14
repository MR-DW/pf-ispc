// Traer 1 usuario
const URL_TRAER_UN_USUARIO = "http://127.0.0.1:8000/usuario/tu-usuario/2/";

export const getUnUsuario = async () => {
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


// API PARA CREAR UN USUARIO
const URL_CREAR_NOTAS = "http://127.0.0.1:8000/usuario/registrar-usuario/";

export const usuarioInfo = [{
    'password': 'password',
    'id_usuarios': 0,
    'username': 'username',
    'email': 'email@email.com',
    'nombre': 'nombre',        
    'apellido': 'apellido',
    'last_login': null,
    'is_superuser': false
}];


export const crearUsuario = (newUsuario) => {
  
    return fetch(
    URL_CREAR_NOTAS,
    {method: 'POST',
    headers:{
      'Content-type':'application/json'
    },
    body: JSON.stringify({
        password: String(newUsuario.password).trim(),
        id_usuarios: Number(newUsuario.id_usuarios_id),
        username: String(newUsuario.username).trim(),
        email: String(newUsuario.email).trim(),
        nombre: String(newUsuario.nombre).trim(),        
        apellido: String(newUsuario.apellido).trim(),
        last_login: Date(newUsuario.last_login),
        is_superuser: Boolean(newUsuario.is_superuser)
    })
  });
};