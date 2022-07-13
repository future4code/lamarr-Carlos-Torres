import './App.css';
import {SeletorPaginaExemplos} from './components/SeletorPaginaExemplos';
import {SeletorPagina} from './components/SeletorPagina';
import {Login} from './components/Login';
import {Home} from './components/Home';
import { Exemplos } from './components/Exemplos';


function App() {
  return (
    <div className="App">
      {/* <SeletorPaginaExemplos/> */}
      {/* <SeletorPagina/> */}
      <SeletorPagina/>
    </div>
  );
}

export default App;
