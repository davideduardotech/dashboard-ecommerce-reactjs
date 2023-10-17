import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// COMPONENTS
import Titulo from '../../components/Texto/Titulo';
import Button from '../../components/Button/Simples';
import Input from '../../components/Inputs/Simples';

class RecuperarSenha extends Component{
    state = {email: ""};
    onChange = (field, event) => this.setState({ [field]:event.target.value });

    
    render(){
        const { email } = this.state;
        return (
            <div className="Recuperar-senha">
                <Titulo tipo="h1" titulo="LOJA E-COMMERCE" />
                <br />
                <div>
                    <p>
                        Para reiniciar sua senha, digite seu e-mail abaixo.
                    </p>
                    <p>
                        Iremos te enviar um link pra você entrar e alterar sua senha.
                    </p>
                </div>
                <br />
                <div>
                    <Input value={email} onChange={(event)=>this.onChange("email", event)} label="E-mail" type="email" />
                </div>
                <br />
                <div>
                    <Button  type="success" label="RESETAR SENHA" rota="/resetar-senha" />
                </div>
                
            </div>
        )
    }
}


export default RecuperarSenha;




