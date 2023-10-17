import React from 'react';

// COMPONENTS | DESKTOP
import BarraTopoDesktop from './Desktop/BarraTopo';
import MenuDesktop from './Desktop/Menu';

// COMPONENTS | MOBILE
import BarraTopoMobile from './Mobile/BarraTopo';


class Dashboard extends React.Component{
    render(){
        return(
            <div className="flex horizontal full-height">
                <div className="">
                    <MenuDesktop />
                </div>
            
                 
                
                <div className="flex vertical full-width">
                    <div className="flex horizontal full-width">
                        <BarraTopoDesktop />
                        <BarraTopoMobile />

                    </div>
                    <div className="flex full-height full-width" style={{overflowY:"auto"}}>
                        { this.props.children }
                    </div>
                </div>
            </div>   
        )
    }
}

export default Dashboard;