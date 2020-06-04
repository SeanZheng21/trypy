import React, {Component} from 'react';
import {Link} from "react-router-dom";
import TutorialSideBar from "./TutorialSideBar";

export class TutorialFile extends Component {
    constructor(props) {
        super(props);
        this.exClick = this.exClick.bind(this);
        let answers = [];
        this.state = this.generateInitialState(answers);
    }

    generateInitialState(answer_arr) {
        let correctAnswers = answer_arr;
        let displayedAnswers = [];
        let exAnswer = [];
        for (let elt in answer_arr) {
            displayedAnswers.push(`>>> hidden <<<`);
            exAnswer.push(false);
        }
        return {
            correctAnswers,
            displayedAnswers,
            exAnswer
        }
    }

    exClick = (id) => {
        let resAnswers = [];
        let resDisplay = [];
        for (let i = 0; i < this.state.exAnswer.length; i++) {
            if (i === id) {
                resAnswers.push(!this.state.exAnswer[i]);
            } else {
                resAnswers.push(this.state.exAnswer[i]);
            }
            if (!resAnswers[i]) {
                resDisplay.push(`>>> hidden <<<`);
            } else {
                resDisplay.push(this.state.correctAnswers[i]);
            }
        }
        this.setState({
            ...this.state,
            exAnswer: resAnswers,
            displayedAnswers: resDisplay
        })
    };

    render() {
        return(
            <div className="row">
                <div className="column left">
                    <h1>File Tutorial Works</h1>
                </div>
                <TutorialSideBar/>
            </div>
        );
    }
}

export default TutorialFile;