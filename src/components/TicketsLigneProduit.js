import React from 'react'
import { Table, Accordion, Header, Segment, Icon, Button } from 'semantic-ui-react';

const TicketsLigneProduit = React.createClass({
  render () {
    return (
      <Table.Row>
        <Table.HeaderCell>Crousti Choc</Table.HeaderCell>
        <Table.HeaderCell>25 €</Table.HeaderCell>
        <Table.HeaderCell>3 kg</Table.HeaderCell>
        <Table.HeaderCell>75 €</Table.HeaderCell>
      </Table.Row>
    )
  }
})

export default TicketsLigneProduit
