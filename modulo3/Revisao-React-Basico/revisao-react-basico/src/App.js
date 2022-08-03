
//import './App.css';

import { Homepage } from './Pages/Homepage/Homepage'
import { Detailspage } from './Pages/Detailspage'
import { GlobalStyle } from './GlobalStyle';


function App() {
  return (
    <div className="App">

      <GlobalStyle> </GlobalStyle>

      <h1> App </h1>

      <Homepage/>
      {/* <Detailspage/> */}

    </div>
  );
}

export default App;
