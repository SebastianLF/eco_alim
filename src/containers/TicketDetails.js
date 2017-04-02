import React from 'react'
import { connect } from 'react-redux';
import { creatorSelector } from 'reselect';
import { Table, Accordion, Header, Segment, Icon, Button } from 'semantic-ui-react';
import TicketsLigneProduit from '../components/TicketsLigneProduit';
import { displayLineProductsInOrder } from '../redux/modules/tickets'

const TicketDetails = React.createClass({

  delete () {
   this.props.delete(this.props.id)
  },

  render () {
    return (
      <div>
        <p><strong>Description: </strong>{ this.props.description }</p>
        <Table size='small' compact selectable singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Qté</Table.HeaderCell>
              <Table.HeaderCell>Unité</Table.HeaderCell>
              <Table.HeaderCell>Produit</Table.HeaderCell>
              <Table.HeaderCell>PU</Table.HeaderCell>
              <Table.HeaderCell>PP</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <TicketsLigneProduit lineProducts={ this.props.lineProducts } />
        </Table>
        <Button color='red' content='Supprimer ce ticket' onClick={this.delete}/>
      </div>
    )
  }
});

const mapStateToProps = (state, ownProps) => {

  // return state.tickets.liste[ownProps.id].lineProduct.orders && state.tickets.liste[ownProps.id].lineProduct.orders.map(function (line) {
  //   return
  // }
  return {
    lineProducts: displayLineProductsInOrder(state, ownProps.id)
  }
}

export default connect(mapStateToProps)(TicketDetails);
