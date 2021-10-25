
import './App.css';
import './components/formulario-cadastro/formulario.css'
import './components/cabecalho/cabecalho.css'
import './components/cadastros/cadastros.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FormularioCadastro from './components/formulario-cadastro/FormularioCadastro';
import Cadastros from './components/cadastros/Cadastros';
import Cabecalho from './components/cabecalho/Cabecalho';



const App = () => {
  return (
    <>
      <Router>
        <div>  <Cabecalho /></div>
      
        <Switch>
          <Route exact path='/'>
            <div className="App">
              <FormularioCadastro />
            </div>
          </Route>
          <Route path="/Cadastros">
            <div>
                <Cadastros />
            </div>
          </Route>
        </Switch>
      </Router>


    </>
  );
}

export default App;
