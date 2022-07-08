
import React from "react";

const Exercicio1=()=>{

    let numeros=[0,1,2,3,4,5,6,7,8,9]


    let vetTeste=numeros.map((valor, indice)=>{    
        if(indice % 3 === 0) 
        {            
            return valor;
        }
        else
        {
            return 0;
        }
    })

    let vetResultante=numeros.map((valor, indice)=>{    
        return valor * 2;
    })

    let vetDiv3=numeros.filter((valor)=>{
        return valor%3===0;
    })

    console.log(vetTeste);
    console.log(numeros);
    console.log(vetResultante);
    console.log(vetDiv3);

    

    return(
        <>
        </>
    )

}

export default Exercicio1;