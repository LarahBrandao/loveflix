import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';

import Home from './pages/Home';
import CadastroVideo from './pages/Cadastro/Video';
import CadastroCategoria from './pages/Cadastro/Categoria';


ReactDOM.render(
 <BrowserRouter>
    <Switch>
      <Route path="/cadastro-categoria" component={CadastroCategoria} />
      <Route path="/cadastro-video" component={CadastroVideo} />
      <Route path="/" component={Home} exact />
      <Route component={ () => (<div> Página 404 </div>) } />
      
    </Switch>
 </BrowserRouter>,

  document.getElementById('root')
);