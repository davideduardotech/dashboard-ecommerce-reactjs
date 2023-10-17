import React from 'react';

const Titulo = ({ tipo, titulo }) => {
    switch (tipo) {
        case 'h1':
            return (<h1 className="Titulo">{titulo}</h1>);
        case 'h2':
            return (<h2 className="Titulo-Segundario">{titulo}</h2>);
        case 'h3':
            return (<h3 className="Titulo">{titulo}</h3>);
        case 'h4':
            return (<h4 className="Subtitulo">{titulo}</h4>);
        case 'h5':
            return (<h5 className="Titulo">{titulo}</h5>);
        case 'h6':
            return (<h6 className="Titulo">{titulo}</h6>);
        default:
            return (<h1 className="Titulo">{titulo}</h1>);
    }
}

export default Titulo;
