import React from 'react';

const Cadastros = () =>{
    
    return(
        <>
        <h1>Cadastrados</h1>
        <div className="cadastros">
            <table className="cadastro-tabela" id="tabela">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Telefone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody id="corpo-tabela">
                    <tr>
                        <td>Renan</td>
                        <td>12345678909</td>
                        <td>11987654234</td>
                        <td>renan@email.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Cadastros;