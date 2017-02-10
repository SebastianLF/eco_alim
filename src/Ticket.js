import React from 'react'
import { Button, Dimmer, Header, Icon, Loader } from 'semantic-ui-react'

class DimmerPage extends React.Component {
  state = {}

  handleOpen = () => this.setState({ active: true })
  handleClose = () => this.setState({ active: false })

  render() {
    const { active } = this.state

    return (
      <div>
        <Button
          content='Loading'
          icon='plus'
          labelPosition='left'
          onClick={this.handleOpen}
        />

        <Dimmer
          active={active}
          onClickOutside={this.handleClose}
          page
          inverted
        >
          <Loader inverted>Loading</Loader>
        </Dimmer>
      </div>
    )
  }
}

const Ticket = React.createClass({

  isLoading () {
    return ;
  },

  render () {
    return (
      <div>
        <DimmerPage />
        <h1>{}</h1>
      </div>
    )
  }
})



export default Ticket
