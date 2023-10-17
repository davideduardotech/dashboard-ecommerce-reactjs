import React from 'react';
import { Link } from 'react-router-dom';

// STYLE
import './css/Simples.scss';

const Tabela = ({ cabecalho, dados }) =>(
    <div className='tabela-simples-mascara'>
        <div className="tabela-simples-container">
        <table className='tabela-simples'>
            <thead>
                <tr>
                    { cabecalho.map((item,index)=>(<th key={index}>{item}</th>))}
                </tr>
            </thead>
            <tbody>
                { dados.map((linha, indexLinha)=>(
                    <tr key={indexLinha}>
                        {
                            cabecalho.map((item, indexItem)=>(

                                
                                <td key={indexItem}>
                                {
                                typeof linha[item] === "object" ? (
                                    <div className={`flex horizontal flex-center ${linha[item].className}`}>
                                    <div className="">
                                        {linha[item].icon}
                                    </div>
                                    <div className=''>
                                        {linha[item].text}
                                    </div>
                                    </div>
                                ) : (
                                    typeof linha[item] === "string" ? (
                                    <div className={`${linha[item].includes("R$") ? "transform-bold" : ""}`}>
                                        {linha[item] || ""}
                                    </div>
                                    ) : (
                                    linha[item] || ""
                                    )
                                )
                                }
                                    </td>
                            ))
                        }

                        {linha["BotaoDetalhes"] && (
                            <td>
                                <Link to={linha["BotaoDetalhes"]} className='BotaoDetalhes'>
                                    <button>
                                        
                                            <i className='fas fa-copy' />
                                        
                                        DETALHES
                                    </button>
                                </Link>
                            </td>
                        )}
                    </tr>
                )) }
            </tbody>
        </table>
    </div>
    </div>
)

export default Tabela;


