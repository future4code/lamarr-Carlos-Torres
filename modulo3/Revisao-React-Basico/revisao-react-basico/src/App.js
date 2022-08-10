
import { Homepage } from './Pages/Homepage/Homepage'
import { Detailspage } from './Pages/Detailspage'
import { GlobalStyle } from './GlobalStyle'
import { results } from './data/data'
import { useState } from 'react'

function App() {

  const[characters, setCharacters] = useState(results)
  const[image, setImage] = useState("")
  const[name, setName] = useState("")
  const[species, setSpecies] = useState("")

  const handleInputImage = (event) => setImage(event.target.value)
  const handleInputName = (event) => setName(event.target.value)
  const handleInputSpecies = (event) => setSpecies(event.target.value)

  const addCharacter = (event) => {
    event.preventDefault()

    const newCharacter = {
        id: Date.now(),       
        name,               /* Poderia ser name: name, - O NOME DA VARIÁVEL FOR IGUAL AO DA PROPRIEDADE, DÁ CERTO! */
        species,
        origin: {
            name: "Earth"
        },        
        image
    }

    const newCharactersList = [...characters, newCharacter]
    setCharacters(newCharactersList)


    results.push(newCharacter)
    console.log(results)

  }

  console.log("Dados result chegando de fato!")
  console.log(results)

  return (
    
    <div className="App">

      <GlobalStyle/>

      <Homepage 
      characters={characters}
      states={{image, name, species}}
      handlers={{handleInputImage, handleInputName, handleInputSpecies}}
      addCharacter={addCharacter}
      />

      <Detailspage/>

    </div>

  );
}

export default App;


/*
       Usando botão 

import { Homepage } from './Pages/Homepage/Homepage'
import { Detailspage } from './Pages/Detailspage'
import { GlobalStyle } from './GlobalStyle'
import { results } from './data/data'
import { useState } from 'react'

function App() {

  const[characters, setCharacters] = useState(results)

  const addCharacter = () => {
    
    const newCharacter = {
        "id": 28,
        "name": "Teste28",
        "species": "Human",
        "origin": {
            "name": "Earth"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/28.jpeg"
    }

    const newCharactersList = [...characters, newCharacter]
    setCharacters(newCharactersList)


    results.push(newCharacter)
    console.log(results)

  }


  console.log("Dados result chegando de fato!")
  console.log(results)

  return (
    
    <div className="App">

      <GlobalStyle/>

      <Homepage characters={characters}/>
      <button onClick={addCharacter}>Adicionar</button>

      <Detailspage/>

    </div>

  );
}

export default App;


*/