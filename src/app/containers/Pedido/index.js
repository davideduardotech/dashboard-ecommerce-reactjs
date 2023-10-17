import React,{ Component } from 'react';

// ESTILO
import './css/index.scss';

// COMPONENTS
import DetalhesDoPedido from './DetalhesDoPedido';
import DetalhesDaEntrega from './DetalhesDaEntrega';
import DetalhesDoPagamento from './DetalhesDoPagamento';

class Pedido extends Component{
    render(){
        return(
            <div className="Pedido flex vertical">
                <div className="Card">
                    <DetalhesDoPedido />
                </div>
                <div className="flex horizontal border">
                    <div className="Card flex-1 flex vertical mr-3 mt-2">
                        <DetalhesDaEntrega />
                    </div>
                    <div className="Card flex-1 flex vertical">
                        <DetalhesDoPagamento />
                    </div>

                </div>
            </div>
        )
    }
}

export default Pedido;