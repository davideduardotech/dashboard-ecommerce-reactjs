import React, { Component } from 'react';

// ESTILO
import './css/DetalhesDoPedido.scss';

// COMPONENTS
import Titulo from '../../components/Texto/Titulo';
import TextoDados from '../../components/Texto/Dados';
import ButtonSimples from '../../components/Button/Simples';
import TabelaSimples from '../../components/Tabela/Simples';

class DetalhesDoPedido extends Component{
    renderCabecalho(){
        return(
            <div className="flex horizontal vertical-mobile">
                <div className="flex horizontal flex-start border">
                    <Titulo tipo="h2" titulo="Detalhes do Pedido - Clientes 01 - 07/10/23"/>
                </div>
                <div className="flex horizontal flex-start w-100px border">
                    <ButtonSimples type="danger-line"  label="CANCELAR PEDIDO" onClick={()=> alert("Pedido Cancelado")} />
                </div>
            </div>
        )
    }

    renderDadosDoCliente(){
        return(
            <div className="flex-2 dados-do-cliente">
                <div className="flex horizontal flex-start">
                    
                    <i className="fa-solid fa-user" />
                    
                    
                    <Titulo tipo="h4" titulo="Dados do Cliente"/>
                    
                </div>
                <TextoDados chave="Nome" valor="Cliente 01"/>
                <TextoDados chave="CPF" valor="111.222.333-45"/>
                <TextoDados chave="Telefone" valor="(81) 99999-9999"/>
                <TextoDados chave="Data de Nascimento" valor="13/02/1998"/>
            </div>
        )   
    }

    renderDadosDeEntrega(){
        return(
            <div className="flex-2 dados-da-entrega">
                <div className="flex horizontal flex-start">
                    
                    <i className="fa-solid fa-truck" />
                    
                    
                    <Titulo tipo="h4" titulo="Dados de Entrega"/>
                    
                </div>
                
                <TextoDados chave="Endereço" valor="Rua teste, 123"/>
                <TextoDados chave="Bairro" valor="Centro"/>
                <TextoDados chave="Cidade" valor="Uberlandia"/>
                <TextoDados chave="Estado" valor="Minas Gerais"/>
                <TextoDados chave="CEP" valor="12345-567"/>
            </div>
        )   
    }

    renderDadosDoCorrinho(){
        const dados = [
            {
                "Produto":"Short Adidas",
                "Preço Uni.":"R$ 32",
                "Quantidade":1,
                "Preço Total":"R$ 50.90"
            }
        ];
        return( 
            <div className="flex-3 dados-do-carrinho">
                <div className="flex horizontal flex-start">
                    
                    <i className="fa-solid fa-cart-shopping" />
                    
                    
                    <Titulo tipo="h4" titulo="Carrinho"/>
                    
                </div>
                
                <br />
                <TabelaSimples cabecalho={["Produto", "Preço Uni.", "Quantidade", "Preço Total"]} dados={dados} />
            </div>
            
        )
    }


    renderDadosDePagamento(){
        return(
            <div className="flex-3 dados-de-pagamento">
                <div className="flex horizontal flex-start">
                    
                    <i className="fa-solid fa-dollar-sign" />
                    
                    
                    <Titulo tipo="h4" titulo="Dados de Pagamento"/>
                    
                </div>
                <TextoDados chave="Taxa de Entrega" valor="R$ 18.90 (PAC)"/>
                <TextoDados chave="Valor do Pedido" valor="R$ 32"/>
                <TextoDados chave="Valor Total" valor="R$ 50.90"/>
                <TextoDados chave="Forma de Pagamento" valor="PIX"/>
            </div>
        )   
    }

    render(){
        return(
            <div className="Detalhes-Do-Pedido">
                { this.renderCabecalho() }
                <div className="flex vertical">
                    <div className="flex horizontal flex-wrap vertical-mobile">
                        { this.renderDadosDoCliente() }
                        { this.renderDadosDoCorrinho() }
                    </div>
                    <div className="flex horizontal flex-wrap vertical-mobile">
                        { this.renderDadosDeEntrega() }
                        { this.renderDadosDePagamento() }
                    </div>
                    
                    
                    
                </div>
                
            </div>
        )
    }
}

export default DetalhesDoPedido;
