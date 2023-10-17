import React from 'react';
import './css/Dados.scss';

const TextoDados = ({ chave, valor }) => (
    <div className="Texto-Dados">
        <strong>{chave}:&nbsp;</strong>
        <span>{valor}</span>
    </div>
)

export default TextoDados;