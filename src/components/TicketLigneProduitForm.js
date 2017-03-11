import React, { PropTypes } from 'react'
import { Form, Button } from 'semantic-ui-react'

const TicketLigneProduitForm = React.createClass({
  render () {
    return (
        <Form.Group widths='equal'>
          <Form.Input label='Nom' name="name" />
          <Form.Input label='Prix unitaire' name="pu" />
          <Form.Input label='Unité' name="unite" />
          <Form.Input label='Qté' name="qte" />
          <Button color="red" content="Supprimer" onClick={(e) => this.props.deleteProductLine(e, this.props.ligne.key)} compact></Button>
        </Form.Group>
    )
  }
})

export default TicketLigneProduitForm;