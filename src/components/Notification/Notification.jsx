import { Component } from 'react';
import { Text } from './Notification.styled';
export default class Notification extends Component {
  render() {
    return <Text>{this.props.title}</Text>;
  }
}
