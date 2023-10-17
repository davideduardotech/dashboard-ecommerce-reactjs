import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const itemsStart = [
    {rota: "/","icon":(<i className="fas fa-copy"/>),"titulo":"Pedidos"},
    {rota: "/clientes","icon":(<i className="fas fa-users"/>),"titulo":"Clientes"},
    {rota: "/categorias","icon":(<i className="fas fa-clone"/>),"titulo":"Categorias"},
    {rota: "/produtos","icon":(<i className="fas fa-boxes"/>),"titulo":"Produtos"},
    {rota: "/configuracoes","icon":(<i className="fas fa-cog"/>),"titulo":"Configurações"},
    {rota: "/perfil","icon":(<i className="fas fa-user"/>),"titulo":"Perfil"},
];

const ItemsEnd = [
    {rota: "/sair", "icon":(<i class="fa-solid fa-arrow-right-from-bracket"/>),"titulo":"Sair" }
];

const ListItems = ({ open }) => {
    const location = useLocation();
    
    return (
        <div className="menu-desktop-items-wrapper flex vertical full-height">
            <div>
                {
                itemsStart.map((item, idx)=>(
                    <Link to={item.rota} key={idx}>
                    <div className={`menu-desktop-item flex horizontal ${location.pathname === item.rota ?"menu-desktop-item-active":""}`}>
                        <div className="flex-1 flex flex-center">
                            {item.icon}
                        </div>
                        {open && (<div className="flex-2 flex flex-start">
                            <span>{item.titulo}</span>
                        </div>)}
                    </div>
                </Link>
                ))
                }
            </div>

            <div>
                {ItemsEnd.map((item, index)=>(
                    <Link to={item.rota}>
                        <div className={`menu-item flex horizontal ${location.pathname === item.rota ? "menu-item-open" : ""}`}>
                            <div className="flex-1 flex flex-center">
                                {item.icon}
                            </div>
                            {open && (<div className="flex-2 flex flex-start">
                                <span>{item.titulo}</span>
                            </div>)}
                        </div>
                    </Link>
                ))}
            </div>

            
        </div>
    );
}

export default ListItems;


