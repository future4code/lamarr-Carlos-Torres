
import React from 'react';
import Post from './components/Post/Post';
import styled from 'styled-components';
import './style.css'


const ContainerTextoDigitado = styled.main`
  background-color: gray;
  display:flex;
  justify-content: space-evenly;
  padding: 25px;
`

function App() {
return(

  <div className='MainContainer'>

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

      <Post
          nomeUsuario={'Andressa Culman - my girlfriend'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
      />

  </div>  
)

}

export default App;
