import React from "react";

export function CrearNota() {

   // useState
  // const initial = {
  //   'id_notas':0,
  //   'titulo':'Titulo',
  //   'cuerpo':'Aquí se desarrolla tu nota',
  //   'id_usuarios':0
  // };
  const [nota, setNotas] = useState([]);
  // console.log(nota)
  
  // Funcion para traer notas
  const MostrarNotas = async () => {
    try{
      const res = await TraerNotas.getNotas();
      // console.log(res);
      const data = await res.json();
      console.log(data);
      // var titulo = data.titulo;
      // var cuerpo = data.cuerpo;
      
      // le paso al seter de valores de la var, el nuevo estado(valores) que se lo brinda el consumo de la api.  useState
      setNotas(data);
      // setNotas({ titulo, cuerpo });
    } catch(error){
            console.log(error);
      }
  };
  // MostrarNotas();

  // useEffect
  useEffect(() => {
    MostrarNotas();
  }, []);

  // const handleChange = (e) => {
    // setNotas({ ...nota, [e.target.name]: e.target.value });
    // MostrarNotas();
    // const card = document.getElementById('card');
  
    // card.addEventListener('load', () => {
    //   MostrarNotas();
    // })

  return (
    <>
      <div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Titulo Nota
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Titulo"
          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Texto
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Desarrolla tu nota..."
          ></textarea>
        </div>
        <button type="button" className="btn btn-primary">
          Crear Nota
        </button>
      </div>
    </>
  );
}
