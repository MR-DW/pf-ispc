
import './App.css';
// Import componentes
import { Card } from './componentes/TodasLasNotas/Card';
import { VerNotaIndividual} from './componentes/VistaNota/nota'
import { NavBar } from './componentes/NavBar';
import { CrearNota } from './componentes/CrearNota/CrearNota';


function App() {
  return (
    <div className="App">
      
      <NavBar/>
     
      <h1>Tus Notas</h1>

      <Card/>

      {/* <VerNotaIndividual/> */}

      {/* <CrearNota/> */}
      
    </div>
  );
} 

export default App;
