import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import upArrow from './Arrows/up.png';
import downArrow from './Arrows/down.png';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNumber: null,
            nextNumber: null,
            score: null
        }
    }

    makeRandNumber = () => {
        return Math.floor(Math.random() * 21)
    }

    startGame = () => {
        this.setState({ currentNumber : this.makeRandNumber })
    }

    generateNextNumber = () => {
        this.setState({ nextNumber : this.makeRandNumber })
    }

    switchHolderToNext = () => {
        this.setState({ currentNumber : this.state.nextNumber });
    }

    guess = (guess) => {
        var correctGuess;
        if(this.state.nextNumber < this.state.currentNumber) {
            correctGuess = 'lower' 
        } else {
            correctGuess = 'higher'};
        if (correctGuess === guess) {
            this.setState({ score: this.state.score + 1 });
        } else {
            this.setState({ score: 0 });
        }
        this.generateNextNumber();
        this.switchHolderToNext();
    }

    render() {
        return (
            <div>
                <h1>Higher or Lower?</h1>
                <h2>How to play:</h2>
                <h3>Take a guess whether the next number will be higher or lower.</h3>
                <h3>When you're ready, click start to begin.</h3>
                <button onClick={this.startGame}>Start</button>
                    <div class="container">
                        <img class="arrow" alt="up arrow" src={upArrow} onClick={() => this.guess('higher')}/>
                    </div>
                <p>The number is:</p>
                <div class="randomNumber">{this.state.currentNumber}</div>
                    <div class="container">
                        <img class="arrow" alt="down arrow" src={downArrow} onClick={() => this.guess('lower')}/>
                    </div>
                <p>{this.state.score}</p>
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));