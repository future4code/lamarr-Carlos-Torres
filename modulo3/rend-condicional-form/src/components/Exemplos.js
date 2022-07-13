import React, {useState} from "react";

export function Exemplos (){
    //Alterem o valor de testeCondicional para um valor maior do que 2 para ver o resultado mudar.
    const [testCondicional, setTestCondicional]=useState(1);
    let minVarFalsy = 0;
    let minVarTruthy = "Guibson";
    
    return(
        <div>
            {/*Exemplo utilizando Ternario - Lembrar que no ternario nós temos primeiro a condicional, depois o valor se verdadeiro e a terceira parte é o valor se for falso */}
            {testCondicional>2 ? <p>Rodou o Ternario(Condição verdadeira): {testCondicional} é maior do que 2</p> : <p>Rodou o Ternario(Condição falsa): {testCondicional} é menor do que 2</p>}
            
            {/* retorna a segunda expressão */}
            <p>{minVarTruthy && minVarFalsy}</p>

            {/* retorna a primeira expressão */}
            <p>{minVarFalsy && minVarFalsy}</p>

            {/* retorna a primeira expressão */}
            <p>{minVarTruthy || minVarFalsy}</p>
            
            {/* retorna a segunda expressão */}
            <p>{minVarFalsy || minVarFalsy}</p>

            {/* Existem varias possibilidades para utilizar o curto circuito. Teste algumas outras e vejam os possiveis resultados. */}
        </div>
    )
}