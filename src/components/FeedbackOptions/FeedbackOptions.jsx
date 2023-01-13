import { Component } from 'react';
import { BoxOptions } from './FeedbackOptions.styled';
export default class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <BoxOptions>
        <button name="good" type="button" onClick={onLeaveFeedback}>
          Good
        </button>
        <button name="neutral" type="button" onClick={onLeaveFeedback}>
          Neutral
        </button>
        <button name="bad" type="button" onClick={onLeaveFeedback}>
          Bad
        </button>
      </BoxOptions>
    );
  }
}
