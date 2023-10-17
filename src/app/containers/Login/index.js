import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// COMPONENTS
import Titulo from '../../components/Texto/Titulo';
import Input from '../../components/Inputs/Simples';
import Checkbox from '../../components/Inputs/Checkbox';
import Button from '../../components/Button/Simples';



class Login extends Component{
    state = {
        email:"",
        password:"",
        opcaoLembrar:false
    };

    onChangeInput = (field, event) => this.setState({[field]: event.target.value });
    onChangeCheckBox = (field,event) => this.setState({[field]: event.target.checked });

    onClickButtonLogin = () => {
        alert(`Button: Clicou no botão login`);
    }
    

    render(){
        const { email, senha} = this.state;
        return(
            <div className='login'>
                <div className='card'>
                    <Titulo tipo="h1" titulo="Loja E-commerce" />

                    <p>Faça seu login abaixo</p>

                    <Input value={email} type="email" label="E-mail" onChange={(event)=>this.onChangeInput("email",event)} />
                    <Input value={senha} type="password" label="Senha" onChange={(event)=>this.onChangeInput("password",event)} />
                    
                    <div>
                        <div>
                            
                            <Checkbox label="Lembrar" onChange={(event)=> this.onChangeCheckBox('opcaoLembrar',event)}  />   
                        </div>
                        <div>
                            <Link to="/recuperar-senha">Esqueceu sua senha?</Link>
                        </div>
                    </div>
                    
                    <Button label="Login" onClick={()=> this.onClickButtonLogin()} />

                </div>
            </div>  
        )
    }
}


export default Login;
