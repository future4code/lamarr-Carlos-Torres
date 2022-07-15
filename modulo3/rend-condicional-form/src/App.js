import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.section`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 10px auto;
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 10px;

  .coral {
    color: coral;
    font-weight: bold;
  }

  :hover {
    cursor: pointer;
    background-color: lightsalmon;
  }
`
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    //screen reader only
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }

  input {
    padding: 10px 5px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    width: 20%;
  }

  button {
    border: none;
    border-radius: 10px;
    padding: 10px;
    background-color: lightsalmon;
  }

  button:hover {
    cursor: pointer;
    color: white;
  }
`

function App() {
  // estados
  const [inputNome, setInputNome] = useState("")
  const [inputIdade, setInputIdade] = useState("")
  const [pessoas, setPessoas] = useState([
    {
      nome:"Julia",
      idade: 23
    },
    {
      nome:"Tati",
      idade:26
    },
    {
      nome:"Rhuan",
      idade: 30
    },
    {
      nome:"Diandrey",
      idade: 23
    },
    {
      nome:"Jefferson",
      idade: 30
    }
  ])

  // eventos
  const handleInputNome = (e) => {
    setInputNome(e.target.value)
  }

  const handleInputIdade = (e) => {
    setInputIdade(e.target.value)
  }

  // adicionar item
  const addPessoa = (e) => {
    e.preventDefault();

    const novaPessoa = {nome: inputNome, idade: inputIdade}
    const novaListaDePessoas = [...pessoas, novaPessoa]
    setPessoas(novaListaDePessoas)
  }
                     
  const listaDePessoas = pessoas.map((pessoa, index) => {

  })

  return (
    <main>
      <Form>
        <h3>Nome</h3>
        <input
          placeholder='Insira um nome'
          value={inputNome}
          onChange={handleInputNome}
        />
        
        <h3>Idade</h3>
        <input
          placeholder='Insira uma idade'
          value={inputIdade}
          onChange={handleInputIdade}
        />

        <h3>Email</h3>
        <input
          placeholder='Insira um nome'
          value={inputNome}
          onChange={handleInputNome}
        />

      </Form>

      <Form>
        <h3>Grau de escolaridade</h3>
        <input
          placeholder='Insira um nome'
          value={inputNome}
          onChange={handleInputNome}
        />

        <h3>Curso</h3>
        <input
          placeholder='Insira um nome'
          value={inputNome}
          onChange={handleInputNome}
        />

        <h3>Unidade de ensino</h3>
        <input
          placeholder='Insira um nome'
          value={inputNome}
          onChange={handleInputNome}
        />
      </Form>


      <Form>
        <h3>Por que você não terminou uma graduação?</h3>
        <input
          placeholder='Insira um nome'
          value={inputNome}
          onChange={handleInputNome}
        />

        <h3>Possui algum curso complementar?</h3>
        <input
          placeholder='Insira um nome'
          value={inputNome}
          onChange={handleInputNome}
        />

      </Form>


      <Form>

        <button onClick={addPessoa}>Adicionar</button>
        
      </Form>

    </main>
  )
}

export default App;