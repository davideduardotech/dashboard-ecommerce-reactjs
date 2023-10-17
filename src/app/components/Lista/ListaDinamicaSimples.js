import React,{ Component } from 'react';
import ButtonSimples from '../Button/Simples';
import InputSimples from '../Inputs/Simples';

class ListaDinamica extends Component{
    state = {texto: ""};
    onChangeInput = (event) => this.setState({ texto: event.target.value });

    onAdd(){
        const { texto } = this.state;
        this.props.onAdd(texto);
        this.setState({texto: ""});
    }

    render(){
        const { dados, onRemove } = this.props;
        const { texto } = this.state;
        
        return (
            <div className='flex vertical'>
                { dados.map((item, index)=>(
                    <div key={index} className='flex horizontal'>
                        <div className="flex-3 flex flex-start">
                            <span>{item}</span>
                        </div>
                        {onRemove && (<div className="flex-1 flex flex-center">
                            <ButtonSimples type="danger" label=" - " onClick={()=> onRemove(index)} />
                        </div>)}
                    </div>
                )) }
                <div className='flex horizontal'>
                        <div className="flex-3 flex flex-start">
                            <InputSimples 
                            type="text"
                            value={texto}
                            onChange={this.onChangeInput}
                            />
                        </div>
                       <div className="flex-1 flex flex-center">
                        <ButtonSimples type="sucess" label=" + " onClick={()=> this.onAdd(texto)} />
                       </div>
                    </div>
            </div>
        )
    }
}

export default ListaDinamica;


