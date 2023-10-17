import React, { Component } from 'react';
import './css/BarraTopo.scss';

import ListItems from './ListItems';

class BarraTopoMobile extends Component{
    state={open: false};
    toggleOpen = () => this.setState({open: !this.state.open});
    render(){
        const { open }=this.state;
        return(
            <div style={{marginBottom:"60px"}}>
                <div className={`barra-topo-mobile flex ${open? "vertical align-items-start":"horizontal"} flex-${open?"center":"end"} full-width ${open?"barra-topo-mobile-active":""}`} onClick={()=> this.toggleOpen()}>
                
                <div>
                    <i className={`fa-solid fa-${open?"xmark":"bars-staggered"}`} />
                </div>
           
                {open && (<ListItems />)}
            
                </div>
            </div>
            
        )
    }
}

export default BarraTopoMobile;