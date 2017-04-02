import React, { PropTypes } from 'react'
import { Form, Button } from 'semantic-ui-react'

const TicketLigneProduitForm = React.createClass({

  onChange (e, { value, name }) {
    this.props.editProductLine(this.props.id, name, value);
  },
  render () {
    return (
        <Form.Group widths='equal'>
          <Form.Input onChange={this.onChange} label='Qté' name="qty" />
          <Form.Select onChange={this.onChange} label='Unité' name="unit" options={ this.props.units } placeholder='Selectionnez' />
          <Form.Select onChange={this.onChange} label='Produit' name="product" options={ this.props.products } placeholder='Selectionnez' search selection/>
          <Form.Input onChange={this.onChange} label='Prix unitaire' name="pu" />
          <Form.Input onChange={this.onChange} label='Prix Total' name="pp" />
          <Button color="red" content="Supprimer" onClick={(e) => this.props.deleteProductLine(e, this.props.id)} compact></Button>
        </Form.Group>
    )
  }
})

export default TicketLigneProduitForm;
