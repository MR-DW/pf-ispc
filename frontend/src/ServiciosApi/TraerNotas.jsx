  
    const API_URL = 'http://127.0.0.1:8000/notas/ver-notas/';

    export const getNota = async () => {
        return await fetch(API_URL);
    }

    export const infoNota = [
        {
            titulo:'Titulo',
            cuerpo:'Aquí se desarrolla tu nota'
        }
     ];

    






