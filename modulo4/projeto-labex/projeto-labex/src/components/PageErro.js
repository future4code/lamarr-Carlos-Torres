import React from "react"
import { useNavigate } from "react-router-dom";

const PageErro=()=>{

    const navigate=useNavigate();

    const VaiPraTelaInicial=()=>{
        navigate("/")
    }

    return(
        <>
            <h1> Página Erro! </h1>


            <button onClick={VaiPraTelaInicial}> Voltar </button>

        </>
    )
}
export default PageErro;