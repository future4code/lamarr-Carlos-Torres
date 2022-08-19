//import React from "react";
import axios from "axios"
import { useState } from "react"
import  {useForm}  from "./hooks/useForm";

export function Formulario2() {
    //const [email, setEmail] = useState("")
    //const [senha, setSenha] = useState("")
    //const [form, setForm] = useState({email: "", senha: ""})
    const [form, onChange] = useForm({email: "", password: ""})
    console.log ({email: "", senha: ""})

    /*const mudaEmail = (event) => {
        setForm({...form, email: event.target.value})
    }
        const mudaSenha = (event) => {
        setForm({...form, senha: event.target.value})
    }*/

/*    const onChange = (event) => {
        const {name, value} = event.target
        //const name = event.target.name
        //const value = event.target.value

        setForm({...form, [name]: value})
    } */

    //console.log(email, senha)

    /*form["email"]*/
    
    /*const body = {
        "email": email,
        "password": senha
    }

    body.email
    body["email"]*/


    const fazerLogin = (event) => {
        event.preventdefault()  //Pra não recarregar a página antes da requisição.
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos-torres-lamarr/login", 
        form)
        .then ((response)=> console.log(response.data))
        .catch ((error) => console.log(error.message))
        console.log(form)
    }
   
    return (
        <div>
            <h1> Login </h1>
            <form onSubmit={fazerLogin}>

                <label htmlfor="">Email:
                </label>                
                <input
                    name="email"
                    id="email"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={onChange}
                    //onChange={mudaEmail}
                    type="email"
                    required
                />
            
                <label htmlFor="senha"> Senha: 
                </label>
                <input 
                    name="password"
                    id="senha"
                    placeholder="Senha"
                    value={form.password}
                    onChange={onChange}
                    type="password"
                    pattern = "^.{3,}$" //"[A - Z]{3}"
                    //title="Código do país (BRA - FRA - USA)"
                    title="Mínime de 3 caracteres"
                    required
                />
                
                <button type="submit">Enviar</button>

            </form>
        </div>

    )
}