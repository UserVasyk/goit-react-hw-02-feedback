import { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from './Notification.styled';
export default class Notification extends Component {
  render() {
    return <Text>{this.props.title}</Text>;
  }
}
Notification.propTypes = {
  title: PropTypes.string.isRequired,
};
