import React, { Component } from 'react';
export default class Statistics extends Component {
  render() {
    const { good, neutral, bad } = this.props;
    return (
      <div>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {this.props.total()}</li>
          <li>Posiitive Feedback {this.props.positivePercentage()}%</li>
        </ul>
      </div>
    );
  }
}
