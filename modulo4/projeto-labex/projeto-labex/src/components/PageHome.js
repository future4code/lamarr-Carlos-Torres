import React from "react"
import { useNavigate } from "react-router-dom";
const PageHome=()=>{

    const navigate=useNavigate();

    const PageAreaAdmin=()=>{
        navigate("/AreaAdmin")
    }

    const PageListaViagens=()=>{
        navigate("/PageListaViagens")
    }

    return(
        <>
            <h1> Labex - viajando no espaço. </h1>

            <button onClick={PageAreaAdmin}> Área administrativa </button>

            <button onClick={PageListaViagens}> Lista de viagens </button>

        </>
    )
}
export default PageHome;