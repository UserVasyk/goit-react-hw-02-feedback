import { Component } from 'react';
import { Title } from './Section.styled';
export default class Section extends Component {
  render() {
    return (
      <>
        <Title>{this.props.title}</Title>
        {this.props.children}
      </>
    );
  }
}
