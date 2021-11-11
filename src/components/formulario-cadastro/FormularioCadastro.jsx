import React, { useState } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'

const FormularioCadastro = () => {
    const [nomeCad, setNome] = useState("")
    const [cpfCad, setCpf] = useState("")
    const [telefoneCad, setTelefone] = useState("")
    const [emailCad, setEmail] = useState("")
    const [usuario, setUsuario] = useLocalStorage("usuario", {})
    console.log(usuario)
    function criarId(){
        return Math.floor(Math.random() * 1000);
    }


    let listaCadastros = JSON.parse(localStorage.getItem("usuario") || '[]')
   
    const handleClick = (e) =>{
        e.preventDefault()

        
        listaCadastros.push({
            nome: nomeCad,
            cpf: cpfCad,
            telefone: telefoneCad,
            email: emailCad,
            id: criarId()
        })
        
        setUsuario(listaCadastros)

        setNome("")
        setCpf("")
        setTelefone("")
        setEmail("")
    }

    return (
       <div>
        
        <form onSubmit={handleClick} className="formulario-cadastro" >

            <div className="formulario-div">
                <h1 className="formulario-titulo">Formulário de cadastro</h1>
            </div>
            <div className="formulario-div">
                <label className="formulario-label" htmlFor="nome">Nome</label>
                <div>
                <input className="formulario-nome"
                    type="text"
                    name="nome"
                    value={nomeCad}
                    id="nome" required
                    placeholder="Digíte o seu nome"
                    onChange={e => setNome(e.target.value)}
                />
            </div>
            </div>
            <div className="formulario-div">
                <label className="formulario-label" htmlFor="cpf">CPF</label>
                <input className="formulario-cpf"
                    type="text"
                    name="cpf"
                    value={cpfCad}
                    id="cpf"
                    pattern="[0-9]{11}"
                    title="CPF deve ter 11 dígitos!" required
                    placeholder="Digíte o seu cpf"
                    onChange={e => setCpf(e.target.value)}
                />
            </div>
            <div className="formulario-div">
                <label className="formulario-label" htmlFor="telefone">Telefone</label>
                <input className="formulario-telefone"
                    pattern='[0-9]{10,11}'
                    type="tel"
                    name="telefone"
                    value={telefoneCad}
                    id="telefone" required
                    placeholder="Digíte o seu telefone"
                    onChange={e => setTelefone(e.target.value)}
                />
            </div>
            <div className="formulario-div">
                <label className="formulario-label" htmlFor="emails">Email</label>
                <input className="formulario-email"
                    type="email"
                    name="email"
                    value={emailCad}
                    id="emails" required
                    placeholder="Digíte o seu email"
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="div-botao">
                <button className="botao" >Cadastrar</button>
            </div>
        </form>
       
        </div>
    )
}

export default FormularioCadastro;