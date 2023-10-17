import React, { Component } from 'react';

import Titulo from '../../components/Texto/Titulo';
import ListaDinamica from '../../components/Lista/ListaDinamicaSimples';
import InputValor from '../../components/Inputs/InputValor';


class DetalhesDaEntrega extends Component{
    state = {status:[
        "Preparando para Envio",
        "Entregue a Transportadora",
        "Em Trânsito"
    ],
    codigoDeRastreamento:"PA12345678123BR"
};

  

    onAddListaDinamica = (texto) => {
        console.log(`onAddListaDinamica: ${texto}`);
        if(!texto) return false;
        let {status} = this.state;
        status.push(texto);
        this.setState({status});
    }

    handleSubmit = (value) => {
        this.setState({codigoDeRastreamento: value});
        alert("SALVO!!!");
    }



    render(){
        const {status, codigoDeRastreamento} = this.state;
        return(
            <div className="Detalhes-Da-Entrega">
                <Titulo tipo="h4" titulo="Entrega" />
                <br />
                <label>Código de Rastreamento</label>
                <InputValor 
                value={codigoDeRastreamento}
                handleSubmit={(value)=> this.handleSubmit(value)}
                name="CodigoDeRastreamento"
                />
                <br />
                <ListaDinamica
                dados={status}
          
                onAdd={this.onAddListaDinamica}
                />
            </div>
        )
    }
    
}

export default DetalhesDaEntrega;
