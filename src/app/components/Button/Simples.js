import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ type, label,icon, onClick }) =>(
    <div className="Button">
        <button type={type} className={`button button-${type || "default"}`} onClick={onClick}> {icon} {label}</button>
    </div>
    
)

const ButtonSimples = ({ rota, type,icon, label, onClick}) => {
    if(rota){
        return (
            <Link to={rota}>
                <Button type={type} label={label} icon={icon} onClick={onClick} />
            </Link>
        )
    }
    return (
        <Button label={label} onClick={onClick} icon={icon} type={type} />
    )
}

export default ButtonSimples;

