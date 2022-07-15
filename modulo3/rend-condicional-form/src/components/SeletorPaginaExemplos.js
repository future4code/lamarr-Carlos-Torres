import React, {useState} from "react";

// Exemplo IF ELSE
/* export function SeletorPagina (){
    const [trocaState, setTrocaState]=useState(false);
    if(trocaState){
        return <h1>Valor Verdadeiro</h1>
    }else{
        return <h1>Valor Falso</h1>
    }
}  */

// Exemplo switch case
export function SeletorPagina (){
    const [trocaState, setTrocaState]=useState(1);
    /* 1 para adicionar, 2 para alterar, 3 remover, 4 para buscar um valor */
    switch(trocaState){
        case 1:
            return <h1>Adicionar Valor</h1>
            break;
        case 2:
            return <h1>Alterar Valor</h1>
            break;
        case 3:
            return <h1>Remover Valor</h1>
            break;
        case 4:
            return <h1>Consultar Valor</h1>
            break;
        default:
            return <h1>Escolha uma opção válida</h1>
            break;
    }
} 



