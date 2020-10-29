import StartForm from "./StartForm";
import FinForm from "./FinForm";
import GameForm from "./GameForm";
import {Fin, Game, Start} from "../Constants/Const";

import React, {Component} from 'react';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            name: 'NO NAME',
            scores: 'NO GAME'
        }
    }
    chengeScores = scores => {
        this.setState({scores: scores})
    }

    chengeName = name => {
        this.setState({name: name})
    }
    render() {
        switch (this.props.form) {
            case Game: return <GameForm chengeForm={this.props.chengeForm} name={this.state.name} chengeScores={this.chengeScores}/>;
            case Fin: return <FinForm chengeForm={this.props.chengeForm} name={this.state.name} scores={this.state.scores}/>;
            default: return <StartForm chengeForm={this.props.chengeForm} chengeName={this.chengeName}/>;
        }
    }
}

export default Main;
