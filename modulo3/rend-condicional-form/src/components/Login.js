import React from "react";

export function Login(props){
    const {condLogin} = props;
    return(
        <div>
            <h1>Login</h1>
            <button onClick={condLogin}>Fazer login</button>
        </div>
    )

}