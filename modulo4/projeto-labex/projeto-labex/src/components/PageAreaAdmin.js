import React from "react"
import { useNavigate } from "react-router-dom";

const PageAreaAdmin=()=>{

    const navigate=useNavigate();

    const VoltaTelaPrincipal=()=>{
        navigate("/PageHome")
    }

    return(
        <>
            <h1> Página área administrativa </h1>

            <button onClick={VoltaTelaPrincipal}> Volta à tela principal </button>
        </>
    )
}
export default PageAreaAdmin;