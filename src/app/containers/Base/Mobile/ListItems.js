import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const items = [
    {rota: "/","icon":(<i className="fas fa-copy"/>),"titulo":"Pedidos"},
    {rota: "/clientes","icon":(<i className="fas fa-users"/>),"titulo":"Clientes"},
    {rota: "/categorias","icon":(<i className="fas fa-clone"/>),"titulo":"Categorias"},
    {rota: "/produtos","icon":(<i className="fas fa-boxes"/>),"titulo":"Produtos"},
    {rota: "/configuracoes","icon":(<i className="fas fa-cog"/>),"titulo":"Configurações"},
    {rota: "/perfil","icon":(<i className="fas fa-user"/>),"titulo":"Perfil"},
    {rota: "/sair", "icon":(<i class="fa-solid fa-arrow-right-from-bracket"/>),"titulo":"Sair" }
];

const ListItems = () =>{
    const location = useLocation();
    return(
        <div className='items-wrapper-mobile'>
            {items.map((item, index)=>(
                <Link to={item.rota} className={`menu-item-mobile ${location.pathname === item.rota ? "menu-item-mobile-active":""}`}>
                    <div>
                        {item.icon}
                        <span>{item.titulo} </span>
                    </div>
                </Link>
            ))}
            
            
        </div>
    )
}


export default ListItems;
