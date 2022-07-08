import React from 'react';
import Post from './components/Post/Post';
import './style.css'


<ContainerTextoDigitado>
  Nome do usuário:
  <input className='InputNomeUsuario'
  /> 

  Foto do usuário:
  <input className='InputComentario'
  /> 

  Imagem do post:
  <input className='InputComentario'
  /> 

  <button>
    Enviar
  </button>

</ContainerTextoDigitado>


function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'Andressa Culman - my girlfriend'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
  </div>  
)

}

export default App;
