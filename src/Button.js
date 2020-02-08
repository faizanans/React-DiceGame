import React, {Component} from 'react'



class Button extends Component{


    roll = e => {
        this.setState({onClick:true})
        
    }



    render(){
        return <button onClick={this.roll} >Roll Dice</button>
    }

}

export default Button;