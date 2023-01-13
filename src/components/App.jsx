import React, { Component } from 'react';
// import Statistics from './Statistics/Statistics';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback() {
    console.log('this.state: ', this.state);
  }
  countPositiveFeedbackPercentage() {}

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h1>Please Leave Feedback</h1>
        <div>
          <button
            type="button"
            onClick={event => {
              console.log('click');
            }}
          >
            Good
          </button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>Good: {good}</li>
            <li>Neutral:{neutral}</li>
            <li>Bad:{bad}</li>
            <li>Total{this.countTotalFeedback()}</li>
            <li>Posiitive Feedback</li>
          </ul>
        </div>
      </>
    );
  }
}
