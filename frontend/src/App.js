
import './App.css';
// Import componentes
import { ListadoDeNotas } from './componentes/TodasLasNotas/ListadoDeNotas';

import { NavBar } from './componentes/NavBar';


function App() {


  
  return (
    <>
      <NavBar/> 
      <div className="App">

        <h1 className="titulo" >Tus Notas</h1>

        <ListadoDeNotas/>
        
      </div>
    </>
  );
} 

export default App;
