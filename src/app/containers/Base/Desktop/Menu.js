import React, { Component } from 'react';
import './css/Menu.scss';

import ListItems from './ListItems';

class MenuDesktop extends Component{
    state = {open: true};
    toogleOpen = () => this.setState({open: !this.state.open});
    render(){
        const { open } = this.state;
        return(
            <div className={`menu-desktop full-height ${open?"menu-desktop-open":""} flex vertical`}>
                <div className={`menu-desktop-item-top flex flex-end`} onClick={()=>this.toogleOpen()}>
                    {open? (<i class="fa-solid fa-arrow-left" />) : (<i class="fa-solid fa-bars-staggered" />)}
                    
                </div>
                
                <ListItems open={open}/>
            </div>
        )
    }
}

export default MenuDesktop;