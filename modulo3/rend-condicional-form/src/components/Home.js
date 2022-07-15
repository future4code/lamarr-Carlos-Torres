import React, {useState} from "react";
import { Mensagem } from "./Mensagem";
import {Posts} from "./Posts";

export function Home(props){
    const {condLogin} =props;
    const [sectionState, setSectionState]=useState('');

    function monstraPosts(){
        setSectionState('posts');
    }
    function mostraMensagens(){
        setSectionState('mensagens'); 
    }
    function HomeRender (){
        switch(sectionState){
            case 'posts':
                return (<Posts/>);
                break;
            case 'mensagens':
                return (<Mensagem/>);
                break;
            default:
                break;
        }
    }
    return(
        <div>
            <h1>Home</h1>
            <button onClick={monstraPosts}>Posts</button>
            <button onClick={mostraMensagens}>Mensagens</button>
            <button onClick={condLogin}>Logout</button>
            {HomeRender()}
        </div>
    )
}
