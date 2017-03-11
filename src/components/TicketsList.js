import React from 'react';
import faker from 'faker';
import { Table, Accordion, Header, Segment, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import uuid from 'uuid';
var _ = require("lodash");
import TicketDetails from './TicketDetails';

/*const test = () => (
  <Accordion.Title>
    <Icon name='dropdown' />
    18/06/17 - BIOCOOP ST PRIEST - 49 €
  </Accordion.Title>
  <Accordion.Content>
    <p>No description</p>
    <Table size='small' compact singleLine selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Magasin</Table.HeaderCell>
          <Table.HeaderCell>Montant</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
      </Table.Body>
    </Table>
  </Accordion.Content>
)*/

const TicketsList = React.createClass({

  formattedList () {
    return this.props.list.map(function (ticket, i) {
        return {
          key: uuid.v1(),
          title: <Icon name='dropdown' content={ticket.date} />,
          content: <p>No description</p>
        }
      })
  },

  render () {
    return (
      <Accordion panels={ this.formattedList() }></Accordion>
    )
  }
})

const TicketsListWrapper = React.createClass({

  render () {
    return (
      <div>
          <Header as='h2' attached='top'>
            # Tickets
          </Header>
          <TicketsList list={this.props.list}/>
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


export default connect(mapStateToProps)(TicketsListWrapper);
