import React from 'react';
import './css/Pesquisa.scss';

const pesquisa = ({valor, placeholder, onChange,onClick}) => (
    <div className="Pesquisa">
        <input value={valor} placeholder={placeholder} onChange={onChange} />
        <button onClick={onClick}>
            <i className='fas fa-search'/>
        </button>
    </div>
)

export default pesquisa;


