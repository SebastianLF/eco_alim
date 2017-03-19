import React from 'react';
import faker from 'faker';
import { Table, Accordion, Header, Segment, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import uuid from 'uuid';
var _ = require("lodash");
import TicketDetails from './TicketDetails';

const TicketsList = React.createClass({

  formattedList () {
    return this.props.list.map(function (ticket, i) {
        return {
          key: uuid.v1(),
          title: `${ticket.date} - ${ticket.magasin.chaine} ${ticket.magasin.adresse} - ${ticket.montant} €`,
          content: <TicketDetails description={ticket.description} lignes={ ticket.lineProduct }/>
        }
      })
  },

  render () {
    return (
      <Accordion panels={ this.formattedList() } styled fluid></Accordion>
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

  return globalState.tickets.orders.map(function (ticketId) {
    const ticket = globalState.tickets.liste[ticketId];
    const magasin = getAdresseMagasin(_.cloneDeep(globalState.magasin), ticket.magasin);
    magasin.chaine = getNomChaine(globalState.chaine, magasin.chaine);
    return { ...ticket, ...{ magasin: magasin } };
  })

}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    list: getTicketsInOrder(state)
  }
}


export default connect(mapStateToProps)(TicketsListWrapper);
