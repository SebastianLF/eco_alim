import React from 'react'
import { Button, Dimmer, Header, Icon, Loader } from 'semantic-ui-react'
import { connect } from 'react-redux';

class DimmerPage extends React.Component {
  render() {
    const { active } = this.props

    return (
      <div>
        <Dimmer
          active={active}
          page
          inverted
        >
          <Loader inverted>Loading</Loader>
        </Dimmer>
      </div>
    )
  }
}

export default DimmerPage;
