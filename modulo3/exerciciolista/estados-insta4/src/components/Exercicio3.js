
import React from 'react';
import { ItemLista } from "../style";

                            //Em estrutura de objetos, cada elemento possui chaves.
const Exercicio3=()=>{
    const arrayElementos=[
        {nome: "Caio", Idade: 26},
        {nome: "Chijo", Idade: 27},
        {nome: "Lais", Idade: 28},
        {nome: "Mandi", Idade: 29}
    ]

    let arrayComponentes=arrayElementos.map((elemento, index, )=>{
        return (
            <ItemLista key={index}>
                <div>
                    <p>{elemento.nome}</p>
                    <p>{elemento.Idade}</p>
                    <p>{elemento.Idade}</p>
                </div>
            </ItemLista>
        )
    })

    return(
        <>
            {arrayComponentes}
        </>
    )

}

export default Exercicio3;