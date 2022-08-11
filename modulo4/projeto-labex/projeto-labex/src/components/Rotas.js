import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PageErro from "./PageErro";
import PageHome from "./PageHome";
import PageSobre from "./PageSobre";
import PageAreaAdmin from "./PageAreaAdmin";
import PageListaViagens from "./PageListaViagens";
const Rotas=()=>{

    return(

        <BrowserRouter>

            <Routes>
                <Route  path="/" element={<PageHome/>} />
                <Route  path="/sobre" element={<PageSobre/>} />
                <Route  path="/erro" element={<PageErro/>} />

                <Route  path="/AreaAdmin" element={<PageAreaAdmin/>} />
                <Route  path="/ListaViagens" element={<PageListaViagens/>} />
            </Routes>

        </BrowserRouter>
        
    )
}

export default Rotas;