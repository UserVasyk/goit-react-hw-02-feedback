import { Component } from 'react';

export default class Notification extends Component {
  render() {
    return <p>{this.props.title}</p>;
  }
}
