import React from 'react';
import { Link } from 'react-router-dom';
import './css/BarraTopo.scss';

const BarraTopoDesktop = ()=>(
    <div className="barra-topo-desktop flex horizontal">
        <div className="flex-1 flex flex-start">
            <Link to="/" style={{textDecoration:"none"}}>
                <div className="btn-ver-loja">
                    <i class="fa fa-eye"/>
                    <span>Ver Loja</span>
                </div>
            </Link>
        </div>
        <div className="flex-1 flex flex-end">
            <Link to="logout" style={{textDecoration:"none"}}>
                <div className='btn-sair'>
                    <i class="fa fa-right-from-bracket"/>
                    <span>Sair</span>
                </div>
            </Link>
        </div>
    </div>
)

export default BarraTopoDesktop;
