
import './App.css';
// Import componentes
import { ListadoDeNotas } from './componentes/TodasLasNotas/ListadoDeNotas';

import { NavBar } from './componentes/NavBar';


function App() {


  
  return (
    <>
      <NavBar/> 
      <div className="App">
        
        <ListadoDeNotas/>
        
      </div>
    </>
  );
} 

export default App;
