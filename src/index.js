import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';

import Home from './pages/Home';
import CadastroVideo from './pages/Cadastro/Video';
import CadastroCategoria from './pages/Cadastro/Categoria';

import Pagina404 from './pages/404';

/* const Pagina404 = () => (<div>Página 404</div>) */

ReactDOM.render(
 <BrowserRouter>
    <Switch>
      <Route path="/cadastro-categoria" component={CadastroCategoria} />
      <Route path="/cadastro-video" component={CadastroVideo} />
      <Route path="/" component={Home} exact />
      <Route component={Pagina404} />
      
    </Switch>
 </BrowserRouter>,

  document.getElementById('root')
);