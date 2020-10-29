import React from 'react';
import {Game, Start} from "../Constants/Const";

const FinForm = props => {
    return (
        <div className={'inside'}>
            <h2>Player {props.name}</h2>
            <h3>{props.scores}</h3>
            <button onClick={() => props.chengeForm(Start)}>Again?</button>
        </div>
    );
};

export default FinForm;