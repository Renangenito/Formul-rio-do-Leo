import React, { useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { GoX } from "react-icons/go";

const Cadastros = () => {
    const [modal, setModal] = useState("")
    const [usuario, setUsuario] = useLocalStorage("usuario", {})
   

    const handleDelete = (idUsuario) => {
        const usuarioFiltrado = usuario.filter(usuario => usuario.id !== idUsuario)
    
            setUsuario(usuarioFiltrado)
        
    }


    let cadastrados = usuario.map((usuario) =>

        <div className="cadastros-card" id={usuario.index} key={usuario.id}>Nome: {usuario.nome} <br />CPF: {usuario.cpf} <br />
            Telefone: {usuario.telefone} <br />Email: {usuario.email}
            <button className="botao-editar" onClick={() => setModal("active")}>Editar</button>
            <button className="botao-apagar" onClick={() => handleDelete(usuario.id)}>Apagar</button>

        </div>

    )

    return (
        <>

            <h1>Usuários</h1>
            <div className="cadastros">
                <div>
                    <div className="cadastrados">
                        {cadastrados}

                    </div>

                </div>
            </div>
            <div className={`modal ${modal}`} >
                <div className='cabecalho-modal'>
                    <h4 className='titulo-modal'>Novo usuário</h4>
                    <GoX className='close-modal' onClick={() => setModal("")}/>
                </div>
                <form className='formulario-modal' action="">
                    <div className='div-nome-cpf'>
                        <input type="text" placeholder='Nome' required/>
                        <input type="text" placeholder='CPF' pattern="[0-9]{11}" required />
                    </div>
                    <div className='div-telefone-email'>
                        <input type="tel" placeholder='Telefone' pattern="[0-9]{10,11}" required/>
                        <input type="email" placeholder='Email' required/>
                    </div>
                    <div className='div-botoes'>
                        <button className='botao-confirmar' type='submit' >Confirmar</button>
                        <button className='botao-cancelar' type='button' onClick={()=> setModal("")}>Cancelar</button>
                       
                    </div>
                </form>
               
            </div>


        </>
    )
}

export default Cadastros;