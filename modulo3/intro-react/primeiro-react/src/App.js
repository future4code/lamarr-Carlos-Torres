//import logo from './logo.svg';
import logotipoLuminus from './imagens/Luminus_Eletricidade.png'
import './App.css';

function App() 
{
  function mensagemsistema()
  {
    alert("Olá mundo do react, vou te dominar!")
  }

  return (
    <div className="App">
        <h1> Luminus eletricidade e engenharia </h1>
        <img src={logotipoLuminus} alt="Logotipo da Luminus eletricidade e engenharia" />
        <button onClick={mensagemsistema}> Clique para ver a mensagem! </button>
    </div>
  );
}

export default App;
