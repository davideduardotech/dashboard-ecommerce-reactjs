import React from 'react';
import Base from '../Base';

const base = Component => {
    return class extends React.Component{
        render(){
            return(
                <Base>
                    <Component {...this.props}/>
                </Base>
            )
        }
    }
}

export default base;