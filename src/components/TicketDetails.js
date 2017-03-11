import React from 'react'
import { Table, Accordion, Header, Segment, Icon, Button } from 'semantic-ui-react';
import TicketsLigneProduit from './TicketsLigneProduit';

const TicketDetails = React.createClass({

  render () {
    const ticket = this.props.ticket;
    return (
      <div>
        <p><strong>Description:</strong> No description.</p>
        <Table size='small' compact selectable singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Nom</Table.HeaderCell>
              <Table.HeaderCell>PU</Table.HeaderCell>
              <Table.HeaderCell>Qte</Table.HeaderCell>
              <Table.HeaderCell>PP</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <TicketsLigneProduit />
          </Table.Body>
        </Table>
      </div>
    )
  }
});

export default TicketDetails
