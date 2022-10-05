import React from "react"
import { useNavigate } from "react-router-dom";

const PageAreaAdmin=()=>{

    const navigate=useNavigate();

    const VoltaTelaPrincipal=()=>{
        navigate(-1)
    }

    const VaiPraTelaLogin=()=>{
        navigate("/PageLogin")
    }

    return(
        <>
            <h1> Página área administrativa </h1>

            <button onClick={VoltaTelaPrincipal}> Volta à tela principal </button>
            <button onClick={VaiPraTelaLogin}> Tela de login </button>
        </>
    )
}
export default PageAreaAdmin;