import React from "react"
import { useNavigate } from "react-router-dom";
const PageTelaLogin=()=>{

    const navigate=useNavigate();

    const PageRetornaPaginaAnterior=()=>{
        navigate(-1)
    }

    return(
        <>
            <h1> Login </h1>

            <button> Verifique a senha </button>

            <button onClick={PageRetornaPaginaAnterior}> Voltar </button>

        </>
    )
}
export default PageTelaLogin;