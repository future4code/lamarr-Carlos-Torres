import axios from "axios"
import { useState } from "react"

export function Formulario1() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const mudaEmail = (event) => {
        setEmail(event.target.value)
    }
    const mudaSenha = (event) => {
        setSenha(event.target.value)
    }

    console.log(email, senha)

    const body = {
        "email": email,
        "password": senha
    }

    const fazerLogin = () => {
        axios.post(url, body, headers)
        console.log(body)
    }
   
    return (
        <div>
            <h1> Login </h1>
            <input
                placeholder="E-mail"
                value={email}
                onChange={mudaEmail}
            />
            
            <input 
                placeholder="Senha"
                value={senha}
                onChange={mudaSenha}
            />
            <button onClick={fazerLogin}>Login</button>
        </div>

    )
}