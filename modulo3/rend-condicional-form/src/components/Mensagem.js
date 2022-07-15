import React, {useState} from "react";

export function Mensagem(){
    const [listaMensagens, setListaMensagens]=useState([])
    return(
        <div>
            <h1>Mensagens</h1>
            {listaMensagens.length ? <p>Você tem {listaMensagens.length} mensagem(s).</p> : <p>Você não tem nenhuma nova mensagem</p>}
        </div>
    )

}