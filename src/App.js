import React, {Component} from 'react';
import './App.css';
import StartForm from "./Component/StartForm";
import GameForm from "./Component/GameForm";
import FinForm from "./Component/FinForm";
import {Fin, Game, Start} from "./Constants/Const";
import Main from "./Component/Main";

class App extends Component {
    constructor() {
        super();
        this.state = {
            nowForm: Start,
        }
    }

    chengeForm = form => {
        this.setState({nowForm: form})
    }



    render() {
        return (
            <div class="container">
                <div className="GameWindow">
                <Main form={this.state.nowForm} chengeForm = {this.chengeForm}/>
                </div>
            </div>
        );
    }
}

export default App;
