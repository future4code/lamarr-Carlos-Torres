import React, {useState} from "react";
import {Home} from './Home';
import {Login} from './Login';


export function SeletorPagina()
{
    const [loginState, setLoginState] = useState(false);

    function logar(){
        setLoginState(!loginState);
    }

    if(loginState) {
        return <Home condLogin={logar}/>
    }
    else
    {
        return <Login condLogin={logar}/>
    }
}

/*
export function SeletorPagina (){

    const [trocaState, setTrocaState] = useState(1);  
    switch(trocaState){
        case 1: 
            return <h1> Inclusão </h1>
            break;
        case 2:
            return <h1> Alteração </h1>
            break;
        case 3:
            return <h1> Consulta </h1>
            break;
        case 4:
            return <h1> Exclusão </h1>
            break;
        default:
            return <h1> Escolha uma opção válida </h1>
            break;
    }
} 

*/

/*
export function SeletorPagina (){

    const [loginState, setLoginState]=useState(true);

    function logar(){
        setLoginState(!loginState);
    }

    if(loginState){
        return <Home condLogin={logar}/>
    }else{
        return <Login condLogin={logar}/>
    }
}

*/