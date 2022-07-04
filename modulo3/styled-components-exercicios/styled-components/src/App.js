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
import logotipoLuminus from './imagens/Luminus_Eletricidade.png'
import React from 'react';
import styled from 'styled-components';
import { Footer } from "./style";

const Container = styled.main`
  background-color: gray;
  display:flex;
  justify-content: space-between;
  padding:70px;
`
const ContainerLogotipo = styled.main`
  background-color: gray;
  display:flex;
  justify-content: center;
  //object-fit:10px;
  //max-width:50px;
  //max-height:50px;
  max-block-size:70px;
`
const ContainerTextoDigitado = styled.main`
  background-color: gray;
  display:flex;
  justify-content: space-evenly;
  padding: 25px;
`
const SpanVermelho = styled.span`
  background-color: yellow;
  padding:150px;
`
const SpanAmarelo = styled.span`
  background-color: yellow;
  padding:150px;
`

function App(){
  return(
  <div>

      <ContainerLogotipo>
          <img src={logotipoLuminus} alt="Logotipo da Luminus eletricidade e engenharia" />
      </ContainerLogotipo>

      <Container>
          <SpanVermelho>
          </SpanVermelho>

          <SpanAmarelo>
          </SpanAmarelo>
      </Container>

      <ContainerTextoDigitado>
          Remetente:
          <input className='InputComentario'
            placeholder={'Comentário'}
            value={''}
          /> 

          Msg:
          <input className='InputComentario'
            placeholder={'Comentário'}
            value={''}
          /> 

          <button>
              Enviar
          </button>

      </ContainerTextoDigitado>

      <Footer>       
        <p> Copyright 2022 Labenu All rights reserved. R. Pais Leme,215 Conjunto 820 Pinheiros CEP 05424-150</p>
      </Footer>

    </div>
  );
}

export default App;