import React, {Component} from 'react';
import {Fin, Game} from "../Constants/Const";

class GameForm extends Component {

    constructor() {
        super();
        let allCards = [];
        let n = 13;
        for(let i=0; i<n; i++){
            allCards[i] = (i+1)+'♣';
        }
        for(let i=n; i<n*2; i++){
            allCards[i] = (i+1-n)+'♦';
        }
        for(let i=n*2; i<n*3; i++){
            allCards[i] = (i+1-n*2)+'♥';
        }
        for(let i=n*3; i<n*4; i++){
            allCards[i] = (i+1-n*3)+'♠';
        }
        allCards.sort(() => Math.random() - 0.5);

        this.state = {
            allCards: allCards,
            myWins: 0,
            compWins: 0,
            draw: 0,
        }
    }

    handlerGame = () => {
        if (this.state.allCards.length > 0) {
            let myCard = this.state.allCards.pop()
            let compCard = this.state.allCards.pop()
            let myNumb = parseInt(myCard);
            let compNumb = parseInt(compCard);;
            if (myNumb > compNumb) {
                this.state.myWins++
            } else if (myNumb < compNumb) {
                this.state.compWins++;
            } else {
                this.state.draw++;
            }
            this.setState(
                {
                    myCard: myCard,
                    compCard: compCard,
                }
            );
        } else {
            this.props.chengeScores(`Win:${this.state.myWins} Lose:${this.state.compWins} Draw:${this.state.draw}`)
            this.props.chengeForm(Fin)
        }
    }

    render() {
        return (
            <div className={'inside'}>
                <h3>Computer {this.state.compWins}</h3>
                <div className={'card'}>{this.state.compCard}</div>
                <div className={'card'}>{this.state.myCard}</div>
                <h3>{this.props.name} {this.state.myWins}</h3>
                <button onClick={this.handlerGame}>Next</button>
                <h3>Draw: {this.state.draw}</h3>
            </div>
        );
    }
}

export default GameForm;