import React from 'react';
import { Table, Header, Segment, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import uuid from 'uuid';
var _ = require("lodash");

const TicketsList = React.createClass({

  render () {
    return (
      <div>
          <Header as='h2' attached='top'>
            # Tickets <Button icon="plus" content="Add" primary disabled/>
          </Header>
          <Table singleLine selectable attached>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Magasin</Table.HeaderCell>
                <Table.HeaderCell>Montant</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              { this.props.list && this.props.list.map(function (ticket, i) {
                return (
                  <Table.Row key={ uuid.v1() }>
                    <Table.Cell>{ticket.date}</Table.Cell>
                    <Table.Cell>{`${ticket.magasin.chaine} - ${ticket.magasin.adresse}`}</Table.Cell>
                    <Table.Cell>{ticket.montant}</Table.Cell>
                    <Table.Cell textAlign='right'>
                      <Link to={{ pathname: `/tickets/${ticket.id}`, params: { details: ticket } }}>
                        <Button content='Details' />
                      </Link>
                    </Table.Cell>
                  </Table.Row>
                )
              })}
            </Table.Body>
          </Table>
      </div>
    )
  }

});

const getAdresseMagasin = function (shopState, shopId) {
  return shopState[shopId];
}

const getNomChaine = function (chaineState, chaineId) {
  return chaineState[chaineId];
}

const getTicketsInOrder = function (globalState) {

  return globalState.tickets.ordre.map(function (ticketId) {
    const ticket = globalState.tickets.liste[ticketId];
    const magasin = getAdresseMagasin(_.cloneDeep(globalState.magasin), ticket.magasin);
    magasin.chaine = getNomChaine(globalState.chaine, magasin.chaine);
    return { ...ticket, ...{ magasin: magasin } };
  })

}

const mapStateToProps = (state) => {
  return {
    list: getTicketsInOrder(state)
  }
}


export default connect(mapStateToProps)(TicketsList);
