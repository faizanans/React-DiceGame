import React, {Component} from 'react';
import Die from './Die';
import './RollDice.css'

const faces = ['fas fa-dice-one', 'fas fa-dice-two', 'fas fa-dice-three',
                    'fas fa-dice-four','fas fa-dice-five', 'fas fa-dice-six'];


class RollDice extends Component{

    
    constructor(props){
        super(props);
        this.state = {
            die1 : 'fas fa-dice-one' ,
            die2 : 'fas fa-dice-one' ,
            buttonDisable : false
        }

        this.rollDice = this.rollDice.bind(this);

    }

    genRandom(){
        let num = Math.floor((Math.random())*6);
        return faces[num];
    }

    rollDice(){
        const newDie1 = this.genRandom();
        const newDie2 = this.genRandom();

        this.setState({die1: newDie1, die2 : newDie2, buttonDisable: true});

        setTimeout(() =>{
            this.setState({buttonDisable: false})
        }, 1000);
    }

    render(){
        return <div>

            <div className='RollDice-flex'>
                
                <span className='RollDice-die'><Die value={this.state.die1} rolling={this.state.buttonDisable}/></span>
                <span className='RollDice-die'><Die value={this.state.die2} rolling={this.state.buttonDisable}/></span>
                {/* defining two dice */}
                


                
            
            </div>

            <div className='RollDice-flex'>
                <button className={`RollDice-button ${this.state.buttonDisable ? 'RollDice-button-effect' : ''}`} onClick={this.rollDice} disabled={this.state.buttonDisable}>
                    {this.state.buttonDisable ? 'Rolling' : 'Roll Dice' }  
                </button>

            </div>

            
            
            

        </div>
    }
}

export default RollDice;