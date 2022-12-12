// INITIAL STATE
export const infoNota = [
  {
    id_notas: 0,
    titulo: "Titulo",
    cuerpo: "Aquí se desarrolla tu nota",
    id_usuarios: 0,
  },
];

// API PARA Listar todas las notas
const API_URL = "http://127.0.0.1:8000/notas/ver-notas/";

export const getNotas = async () => {
  return await fetch(API_URL);
};


// API PARA CREAR UNA LISTA
const url_crear_notas = "http://127.0.0.1:8000/notas/nueva-nota/";
export const crearNotas = async () => {
  return await fetch(url_crear_notas);
}

// API PARA EDITAR / BORRAR UNA LISTA
const url_customNota = "http://127.0.0.1:8000/notas/custom-nota/<int:pk>/";
export const customNota = async () => {
  return await fetch(url_customNota);
}

