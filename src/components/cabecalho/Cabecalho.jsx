import React from 'react';
import { Link } from 'react-router-dom';

const Cabecalho = () =>{
    return(
        <header className="cabecalho">
            <nav>
                <ul className="cabecalho-ul">
                    <li><Link to="/">Formulário</Link></li>
                    <li><Link to="/cadastros">Cadastrados</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Cabecalho;