/*
*****************
 Exercício 1
*****************

import React from 'react';
import { Titulo } from "./style";

function App(){
  return(
    <div>
        <Titulo>Olá turma!</Titulo>
    </div>
  );
}

export default App;
*/


/******************
 Exercício 2
*******************

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: gray;
  display:flex;
  justify-content: space-around;
  padding:30px;
`

const SpanVermelho = styled.span`
  background-color: red;
  margin-right: 10px;

  padding:20px;
`

const SpanAmarelo = styled.span`
  background-color: yellow;
  margin-right: 10px;

  padding:20px;
`

function App(){
  return(

    <Container>
        <SpanVermelho>
            Este é meu 1º span
        </SpanVermelho>

        <SpanAmarelo>
            Este é meu 2º span
        </SpanAmarelo>
    </Container>

  );
}

export default App;*/


/******************
 Exercício 3
*******************

import React from 'react';
import styled from 'styled-components';
import { Footer } from "./style";

const Container = styled.div`
  background-color: gray;
  display:flex;
  justify-content: space-around;
  padding:30px;
`

const SpanVermelho = styled.span`
  background-color: red;
  margin-right: 10px;

  padding:20px;
`

const SpanAmarelo = styled.span`
  background-color: yellow;
  margin-right: 10px;

  padding:20px;
`

function App(){
  return(

    <div>

      <Container>
          <SpanVermelho>
              Este é meu 1º span
          </SpanVermelho>

          <SpanAmarelo>
              Este é meu 2º span
          </SpanAmarelo>
      </Container>

      <Footer>       
        <p> Turma Lamar 2022 </p>
        <div>
          <p className='teste'> Teste </p>
        </div>

      </Footer>

      <Footer>
        <poutro> 2023 </poutro>
      </Footer>

    </div>

  );
}

export default App;
*/

/******************
 Exercício 4
*******************/
import React from 'react';
import styled from 'styled-components';
import { Footer, Header } from "./style";

const Container = styled.main`
  background-color: gray;
  display:flex;
  justify-content: space-around;
  padding:30px;
`

const SpanVermelho = styled.span`
  background-color: red;
  margin-right: 10px;
  padding:20px;

  :hover {
    background-color: coral;
    cursor: pointer;
  }

`

const SpanAmarelo = styled.span`
  background-color: yellow;
  margin-right: 10px;

  padding:20px;
`

function App(){
  return(



  <div>

      <Header>

        <h1> Aula de styled-components </h1>

      </Header>

      <Container>
          <SpanVermelho>
              Este é meu 1º span
          </SpanVermelho>

          <SpanAmarelo>
              Este é meu 2º span
          </SpanAmarelo>
      </Container>

      
      <input className='InputComentario'
      placeholder={'Comentário'}
      value={''}
      />  


      <Footer>       
        <p> Turma Lamar 2022 </p>
        <div>
          <p className='teste'> Teste </p>
        </div>

      </Footer>

      <Footer>
        <poutro> 2023 </poutro>
      </Footer>

    </div>

  );
}

export default App;