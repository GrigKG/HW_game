import React, {Component} from 'react';
import {Game} from "../Constants/Const";

class StartForm extends Component {

    handlerGame = () =>{
        let name = document.getElementById('myTextInput').value;
        this.props.chengeName(name);
        this.props.chengeForm(Game);
    }
        render() {
        return (
            <div className={'inside'}>
                <h2>Ready for Game</h2>
                <input type="text" id='myTextInput' placeholder="Enter your name"/>
                <button onClick={this.handlerGame}>Start</button>
            </div>
        );
    }
}

export default StartForm;

