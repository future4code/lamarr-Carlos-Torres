
import React from 'react';
import { ItemLista } from "../style";

const Exercicio2=()=>{
    const arrayElementos=[
        "Caio",
        "Chijo",
        "Lais",
        "Mandi"
    ]

    let arrayComponentes=arrayElementos.map((elemento, index)=>{
        return (
            <ItemLista key={index}>
                <p>{elemento}</p>
            </ItemLista>
        )
    })

    return(
        <>
            {arrayComponentes}
        </>
    )

}

export default Exercicio2;