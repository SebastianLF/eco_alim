import React from 'react'
import { Table, Accordion, Header, Segment, Icon, Button } from 'semantic-ui-react';

const TicketsLigneProduit = React.createClass({

  render () {
      return (
        <Table.Body>
        {this.props.lineProducts && this.props.lineProducts.map(function (ligne) {
          return (
            <Table.Row key={ ligne.id }>
              <Table.Cell>{ ligne.qty }</Table.Cell>
              <Table.Cell>{ ligne.unit.description }</Table.Cell>
              <Table.Cell>{ ligne.product.name }</Table.Cell>
              <Table.Cell>{ ligne.pu }</Table.Cell>
              <Table.Cell>{ ligne.pp }</Table.Cell>
            </Table.Row>
          )
        }.bind(this))}
        </Table.Body>
      )
    }
})

export default TicketsLigneProduit
