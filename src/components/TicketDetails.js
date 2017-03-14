import React from 'react'
import { Table, Accordion, Header, Segment, Icon, Button } from 'semantic-ui-react';
import TicketsLigneProduit from './TicketsLigneProduit';

const TicketDetails = React.createClass({

  render () {
    return (
      <div>
        <p><strong>Description: </strong>{ this.props.description }</p>
        <Table size='small' compact selectable singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Nom</Table.HeaderCell>
              <Table.HeaderCell>PU</Table.HeaderCell>
              <Table.HeaderCell>Qte</Table.HeaderCell>
              <Table.HeaderCell>PP</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

            <TicketsLigneProduit lignes={ this.props.lignes }/>

        </Table>
      </div>
    )
  }
});

export default TicketDetails
