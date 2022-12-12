
import './App.css';
// Import componentes
import { ListadoDeNotas } from './componentes/TodasLasNotas/MostrarNotas';
// import { VerNotaIndividual} from './componentes/VistaNota/nota'
import { NavBar } from './componentes/NavBar';
// import { CrearNota } from './componentes/CrearNota/CrearNota';

// import router-dom


function App() {


  
  return (
    <>
      <div className="App">
        
        <NavBar/>
      
        <h1 className="titulo" >Tus Notas</h1>

        <ListadoDeNotas/>
        
      </div>
    </>
  );
} 

export default App;
