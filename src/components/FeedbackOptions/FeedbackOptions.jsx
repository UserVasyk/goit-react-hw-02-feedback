import { Component } from 'react';
import { BoxOptions, Button } from './FeedbackOptions.styled';
export default class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <BoxOptions>
        <Button name="good" type="button" onClick={onLeaveFeedback}>
          Good
        </Button>
        <Button name="neutral" type="button" onClick={onLeaveFeedback}>
          Neutral
        </Button>
        <Button name="bad" type="button" onClick={onLeaveFeedback}>
          Bad
        </Button>
      </BoxOptions>
    );
  }
}
