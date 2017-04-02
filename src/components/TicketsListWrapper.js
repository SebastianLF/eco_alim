import React, { PropTypes } from 'react';
import { Table, Accordion, Header, Segment, Icon, Button } from 'semantic-ui-react';
import TicketsList from '../containers/TicketsList';

const TicketsListWrapper = React.createClass({

  render () {
    return (
      <div>
          <Header as='h2' attached='top'>
            # Tickets
          </Header>
          <TicketsList />
      </div>
    )
  }
});

export default TicketsListWrapper
