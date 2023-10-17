import React from 'react';
import './css/Simples.scss';

const Paginacao = ({ atual, total, limite, onClick }) =>{
    const numeroPaginas = Math.ceil(total/limite);
   
    return(
        <div className="Paginacao flex horizontal">
            {
                [...Array(numeroPaginas).keys()].map((numero, index)=>{
                    const numeroAtualDaPagina = numero * limite;
                    return (
                        <div className={`paginacao-item ${numeroAtualDaPagina === atual ? "paginacao-item-active":""}`} onClick={()=>onClick(numeroAtualDaPagina)}>
                            {numero+1}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Paginacao;


