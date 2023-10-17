import React, { Component } from 'react';

// COMPONENTS
import Titulo from '../../components/Texto/Titulo';
import Input from '../../components/Inputs/Simples';
import Button from '../../components/Button/Simples';

class ResetarSenha extends Component{
    state = {senha: "", confirmarSenha: ""};

    onChangeInput = (field, event) => this.setState({[field]: event.target.value });

    render(){
        const { senha, confirmarSenha } = this.state;
        return(
            <div className="Resetar-senha">
                <Titulo tipo="h1" titulo="LOJA E-COMMERCE" />
                <br />
                <div>
                    <Input type="password" label="Senha" value={senha} onChange={(event)=>this.onChangeInput("senha",event)} />
                    <Input type="password" label="Confirmar Senha" value={confirmarSenha} onChange={(event)=>this.onChangeInput("confirmarSenha",event)} />
                </div>
                <div>
                    <Button type="success" rota="/login" label="RESETAR SENHA" />
                </div>
            </div>
        )
    }
}

export default ResetarSenha;

