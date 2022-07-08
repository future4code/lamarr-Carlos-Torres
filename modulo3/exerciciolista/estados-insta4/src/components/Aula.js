
import React from "react";

const Aula=()=>{
    const listaDeElementos=[        
        <li>"item1"</li>,
        <li>"item2"</li>,
        <li>"item3"</li>,
        <li>"item24"</li>,
        <li>"item35"</li>,
        22,
        36,
    ]

    let listaDecomponentes=listaDeElementos.map((item, indice)=>{
        return <li key={indice}> {item} </li>
    })

    return (
        <div> 
            <ul>{listaDecomponentes}</ul>                
        </div>
    );
}

export default Aula;
