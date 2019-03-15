import React, { Component } from 'react';
import styled from 'styled-components';
import 'App.scss';

const Greeting = styled.h3`
  color: teal;
`;

export class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            className="App-logo"
            alt="logo"
          />
          <Greeting className="App-title">{this.props.title}</Greeting>
          <i className="fa fa-glass fa-3x" />
        </header>
      </div>
    );
  }
}

export default Header;
