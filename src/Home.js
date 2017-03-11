import React, { PropTypes } from 'react'
import { Header, Button, Segment, Icon, Image } from 'semantic-ui-react'
import TicketsBox from './containers/TicketsBox'

import './Home.css'

const cx = { margin: '20px' };

const Home = React.createClass({
  render () {
    return (
      <div>
        <Header color='green' style={ cx } className='homeHeader' as='h2' icon textAlign='center'>
          <Icon name='users' circular />
          <Header.Content>
            ECO ALIM
          </Header.Content>
        </Header>
        <TicketsBox />
      </div>
    )
  }
})

export default Home
