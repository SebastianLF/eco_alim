import React, { Component } from 'react';
import TicketsList from './TicketsList'
import { Container } from 'semantic-ui-react'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default App;
