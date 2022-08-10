import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PageErro from "./PageErro";
import PageHome from "./Pagehome";
import PageSobre from "./PageSobre";
const Rotas=()=>{

    return(

        <BrowserRouter>

            <Routes>
                <Route  path="/" element={<PageHome/>} />
                <Route  path="/sobre" element={<PageSobre/>} />
                <Route  path="/erro" element={<PageErro/>} />
            </Routes>

        </BrowserRouter>
    )

}

export default Rotas;