import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
const Cadastros = () => {
    const [usuario, setUsuario] = useLocalStorage("usuario", {})
     
    const handleDelete = (idUsuario) =>{
        const listaFiltrada = usuario.filter( usuario => usuario.id !== idUsuario)
        setUsuario(listaFiltrada)
    }

    
    let cadastrados = usuario.map((usuario) =>
       
        <div className="cadastros-card" id={usuario.id} key={usuario.id}>Nome: {usuario.nome} <br />CPF: {usuario.cpf} <br />
            Telefone: {usuario.telefone} <br />Email: {usuario.email}
            <button className="botao-apagar" onClick={()=> handleDelete(usuario.id)}>Apagar</button>
            {/* <button className="botao-apagar" onClick={()=> handleEdit(usuario.id)}>Editar</button> */}
        </div> 

    )

    return (
        <>

            <h1>Cadastrados</h1>
            <div className="cadastros">
                <div>
                    <div className="cadastrados">
                        {cadastrados}
                 
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cadastros;