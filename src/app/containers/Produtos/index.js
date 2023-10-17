import React, { Component } from 'react';

// COMPONENTS
import Titulo from '../../components/Texto/Titulo';

class Produtos extends Component{
    render(){
        return(
            <div>
                <Titulo tipo="h1" titulo="Produtos" />
            </div>
        )
    }
}

export default Produtos;

