import React from 'react';

const Cadastros = () => {
    const lista = localStorage.getItem("listaCadastros")
    const listaJson = JSON.parse(lista)

    let cadastrados = listaJson.map((c, i) =>
        <div className="cadastros-card" key={i}>Nome: {c.nome} <br/>CPF: {c.cpf} <br/> 
       Telefone: {c.telefone} <br/>Email: {c.email}  
       <button className="botao-apagar" onClick={(event)=>{ event.target.parentNode.remove()}}>Apagar</button>
       </div>
      
    )
    console.log(`testes ${lista}`)
    

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