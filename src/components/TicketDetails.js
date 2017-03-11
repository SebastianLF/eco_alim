import React from 'react'
import { Table, Accordion, Header, Segment, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router';

const TicketDetails = React.createClass({

  render () {
    const ticket = this.props.ticket;
    return (
      <Table.Row key={ this.props.key }>
        <Table.Cell>{ ticket.date }</Table.Cell>
        <Table.Cell>{ `${ticket.magasin.chaine} - ${ticket.magasin.adresse}` }</Table.Cell>
        <Table.Cell>{ ticket.montant }</Table.Cell>
        <Table.Cell textAlign='right'>
          <Link to={{ pathname: `/tickets/${ticket.id}`, params: { details: ticket } }}>
            <Button content='Details' />
          </Link>
        </Table.Cell>
      </Table.Row>
    )
  }
});

export default TicketDetails
