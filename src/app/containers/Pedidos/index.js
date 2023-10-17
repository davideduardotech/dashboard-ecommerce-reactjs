import React,{ Component } from 'react';

// STYLE
import './css/Pedidos.scss';

// COMPONENTS
import Titulo from '../../components/Texto/Titulo';
import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples';
import Paginacao from '../../components/Paginacao/Simples';
import moment from 'moment/moment';

class Pedidos extends Component{
    state = {pesquisa:"",
            atual: 0};
    onChangeSearch = (event) => this.setState({ pesquisa: event.target.value });
    changeNumeroAtual = (atual) => this.setState({atual}); 
    
    render(){
        const { pesquisa } = this.state;

        // DADOS
        const dados = [
            {
                "Cliente":{text:"Cliente 02", icon:(<i className='fa-solid fa-user'/>),className:"tabela-cliente-user"},
                "Valor Total(R$)": "R$89.9",
                "Data": moment().format('DD/MM/YYYY HH:MM:SS'),
                "Situação": {"text":"Aguardando Pagamento","icon":(<i class="fa-regular fa-clock"/>),"className":"situacao-warning"},
                "BotaoDetalhes": "pedido/HGHDGH723NGHGSDXXUE"
            },
            {
                "Cliente":{text:"Cliente 02", icon:(<i className='fa-solid fa-user'/>),className:"tabela-cliente-user"},
                "Valor Total(R$)": "R$123.2",
                "Data": moment().format('DD/MM/YYYY HH:MM:SS'),
                "Situação": {"text":"Aguardando Pagamento","icon":(<i class="fa-regular fa-clock"/>),"className":"situacao-warning"},
                "BotaoDetalhes": "pedido/HGHD34GH723NGHGSUE"
            },
            {
                "Cliente":{text:"Cliente 02", icon:(<i className='fa-solid fa-user'/>),className:"tabela-cliente-user"},
                "Valor Total(R$)": "R$57.2",
                "Data": moment().format('DD/MM/YYYY HH:MM:SS'),
                "Situação": {"text":"Pagamento Concluido","icon":(<i class="fa-solid fa-circle-check"/>),"className":"situacao-success"},
                "BotaoDetalhes": "pedido/HGHDGH72DE453NGHGSUE"
            },
            {
                "Cliente":{text:"Cliente 02", icon:(<i className='fa-solid fa-user'/>),className:"tabela-cliente-user"},
                "Valor Total(R$)": "R$123.2",
                "Data": moment().format('DD/MM/YYYY HH:MM:SS'),
                "Situação": {"text":"Pagamento Cancelado","icon":(<i class="fa-solid fa-triangle-exclamation"/>),"className":"situacao-warning"},
                "BotaoDetalhes": "pedido/HGHD34GH723NGHGSUE"
            }
        ];
        return(
            <div className='Pedidos'>
                <div class="Card">
                    <Titulo tipo="h1" titulo="Pedidos"/>
                    <br />
                    <Pesquisa valor={pesquisa} placeholder={"Procurar Pedido"} onChange={(event)=> this.onChangeSearch(event)} onClick={()=> alert("Pesquisar")} />
                    <br />
                    
                    <Tabela cabecalho={["Cliente", "Valor Total(R$)", "Data", "Situação"]} dados={dados}/>
                    
                    <Paginacao atual={this.state.atual} total={120} limite={20} onClick={(numeroAtual)=>this.changeNumeroAtual(numeroAtual)} />
                </div>
            </div>
        )
    }
}

export default Pedidos;