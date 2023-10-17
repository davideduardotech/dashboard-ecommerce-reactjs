import React, { Component } from 'react';

// COMPONENTS
import Titulo from '../../components/Texto/Titulo';

class Perfil extends Component{
    render(){
        return(
            <div>
                <Titulo tipo="h1" titulo="Perfil" />
            </div>
        )
    }
}

export default Perfil;
