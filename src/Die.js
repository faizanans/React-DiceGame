import React, {Component} from 'react';
import './Die.css'


class Die extends Component{
    render(){
        return <dvi>
            <h1>
                <div className='Die-format'>
                    <i className={`animated ${this.props.value} ${this.props.rolling ? 'wobble': ''}`}></i>

                </div>
            </h1>


        </dvi>
    }
}

export default Die;