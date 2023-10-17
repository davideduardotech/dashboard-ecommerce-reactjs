import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import base from './containers/HOC/Base';

// CONTAINERS
import Login from './containers/Login'; // Login

import Pedidos from './containers/Pedidos'; // Menu
import Clientes from './containers/Clientes';
import Categorias from './containers/Categorias';
import Produtos from './containers/Produtos';
import Configuracoes from './containers/Configuracoes';
import Perfil from './containers/Perfil';

import Pedido from './containers/Pedido';



import RecuperarSenha from './containers/RecuperarSenha';
import ResetarSenha from './containers/RecuperarSenha/ResetarSenha';

// CONTAINERS COM BASE
const BasePedidos = base(Pedidos); // Menu
const BaseClientes = base(Clientes);
const BaseCategorias = base(Categorias);
const BaseProdutos = base(Produtos);
const BaseConfiguracoes = base(Configuracoes);
const BasePerfil = base(Perfil);

const BasePedido = base(Pedido);



function App() {
  return (
    <Provider store={store}>
      <Router>
          <Routes>
            <Route path="/login" exact element={<Login />}/>
            <Route path="/" exact element={<BasePedidos/>} />
            
            {/* MENU */}
            <Route path="/pedido" exact element={<BasePedido/>} />
            <Route path="/clientes" exact element={<BaseClientes />} />
            <Route path="/categorias" exact element={<BaseCategorias />}/>
            <Route path="/produtos" exact element={<BaseProdutos />}/>
            <Route path="/configuracoes" exact element={<BaseConfiguracoes />}/>
            <Route path="/perfil" exact element={<BasePerfil />}/>

            <Route path="/recuperar-senha" exact element={<RecuperarSenha/>} />
            <Route path="/resetar-senha" exact element={<ResetarSenha/>} />
          </Routes>
      </Router>
    
    </Provider>
  
  );
}

export default App;
