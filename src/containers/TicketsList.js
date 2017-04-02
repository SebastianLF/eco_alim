import React from 'react';
import { Table, Accordion, Header, Segment, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uuid from 'uuid';
var _ = require("lodash");
import TicketDetails from './TicketDetails';
import {deleteTicket, getTicketsInOrder, getShopAddress, getChainName} from '../redux/modules/tickets'

const TicketsList = React.createClass({

  deleteTicket (ticketId) {
    this.props.dispatch(deleteTicket(ticketId))
  },

  formattedList () {
    return this.props.list.map(function (ticket, i) {
        return {
          key: `${ticket.id}`,
          title: `${ticket.id} - ${ticket.date} - ${ticket.magasin.chaine} ${ticket.magasin.adresse} - ${ticket.montant} €`,
          content: <TicketDetails id={ ticket.id } description={ ticket.description } delete={ this.deleteTicket }></TicketDetails>
        }
      }.bind(this))
  },

  render () {
    return (
      <Accordion panels={ this.formattedList() } styled fluid></Accordion>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    list: getTicketsInOrder(state)
  }
}

export default connect(mapStateToProps)(TicketsList);
