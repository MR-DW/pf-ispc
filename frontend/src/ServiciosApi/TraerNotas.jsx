const API_URL = "http://127.0.0.1:8000/notas/ver-notas/";

export const getNotas = async () => {
  return await fetch(API_URL);
};

export const infoNota = [
  {
    id_notas: 0,
    titulo: "Titulo",
    cuerpo: "Aquí se desarrolla tu nota",
    id_usuarios: 0,
  },
];

const url_crear_notas = "http://127.0.0.1:8000/notas/ver-notas/";
export const crearNotas = async () => {
  return await fetch(url_crear_notas);
}
