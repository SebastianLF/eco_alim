import React from 'react'
import { Table, Header, Segment, Button } from 'semantic-ui-react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Ticket from '../Ticket'

const TicketsList = React.createClass({

  showDetails (e) {
    e.preventDefault();
    alert('ok')
  },

  displayList () {
    const list = [].concat(this.props.list);
    for (let key in list) {
      list[key]
    }

    return list;
  },

  render () {
    return (
      <div>
        <Header as='h2' attached='top'>
          # Tickets
        </Header>
        <Segment attached>
          <Table singleLine selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Magasin</Table.HeaderCell>
                <Table.HeaderCell>Montant</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              { this.props.list && this.props.list.map(function (ticket) {
                return (
                  <Table.Row>
                    <Table.Cell>{ticket.date}</Table.Cell>
                    <Table.Cell>{ticket.magasin.adresse}</Table.Cell>
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
        </Segment>
      </div>
    )
  }

});

const getShop = function (shopState, shopId) {
  return shopState[shopId].adresse;
}

const getListInOrder = function (globalState) {
  return globalState.tickets.ordre.map(function (ticketId) {
    const ticket = globalState.tickets.liste[ticketId];
    const magasin = { magasin: globalState.magasins[ticket.magasin] }
    return { ...ticket, ...magasin }
  })
}

const mapStateToProps = (state) => ({
  list: getListInOrder(state)
});


export default connect(mapStateToProps)(TicketsList);
