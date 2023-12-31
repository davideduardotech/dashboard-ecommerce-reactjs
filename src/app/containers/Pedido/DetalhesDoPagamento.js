import React, { Component } from 'react';
import Titulo from '../../components/Texto/Titulo';
import ListaDinamica from '../../components/Lista/ListaDinamicaSimples';

class DetalhesDoPagamento extends Component{
    state = {status:[
        "Aguardando Pagamento",
        "Processando Pagamento"
    ]};

  

    onAddListaDinamica = (texto) => {
        console.log(`onAddListaDinamica: ${texto}`);
        if(!texto) return false;
        let {status} = this.state;
        status.push(texto);
        this.setState({status});
    }

    render(){
        const {status} = this.state;
        return(
            <div className="Detalhes-Do-Pagamento">
                <Titulo tipo="h4" titulo="Pagamento" />
                <br />
                <ListaDinamica
                dados={status}
          
                onAdd={this.onAddListaDinamica}
                />
            </div>
        )
    }
}

export default DetalhesDoPagamento;
