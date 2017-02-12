import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import DimmerPage from './Dimmer'
import { isLoaded } from '../redux/modules/info'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          { this.props.children }
        </Container>
      </div>
    );
  }
}

function mapStateToProps({ info }) {
  return {
    info
  }
}

export default connect(mapStateToProps)(App);
