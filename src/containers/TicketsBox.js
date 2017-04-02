import React from 'react'
import { connect } from 'react-redux'
import { Header, Card, Button, Segment, Form, Label, Input, Checkbox } from 'semantic-ui-react'
import uuid from 'uuid'
import TicketsListWrapper from '../components/TicketsListWrapper'
import TicketLigneProduitForm from '../components/TicketLigneProduitForm';
import getMonthName from '../helpers/getMonthName'
import getTimeNow from '../helpers/getTimeNow'
import { getChaineNom } from '../redux/modules/magasin'
import { addTicket } from '../redux/modules/tickets'
var _ = require("lodash");

const BarCompta = (props) => {
  const displayMonth = () => getMonthName(new Date()).toUpperCase();
  const l10nEUR = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" })
  return (
    <Segment>
      <Button
        content={"tickets".toUpperCase()}
        label={{ basic: true, pointing: 'left', content: "3" }}
      />
      <Button
        color="red"
        content={displayMonth()}
        label={{ basic: true, color: 'red', pointing: 'left', content:`${l10nEUR.format(524.56)}` }}
      />
    </Segment>
  )
}

// handle his own state and props.
const TicketsForm = React.createClass({

  getInitialState () {
    return {
      date: getTimeNow(),
      magasin: '1',
      lignes: {},
      lignesOrder: []
    }
  },

  addProductLine (e, key) {
    e.preventDefault();
    const id = uuid.v1();
    this.setState({
      lignes: { ...this.state.lignes, [id]: { id, qty: '', unit: '', product: '', pu: '', pp: '' } },
      lignesOrder: this.state.lignesOrder.concat([id])
    });
  },

  deleteProductLine (e, key) {
    e.preventDefault();
    this.setState({
      lignesOrder: this.state.lignesOrder.filter(function (ligne) {
        return ligne.id !== key
      })
    })
  },

  editProductLine (id, field, value) {
    const lineTargetted = { ...this.state.lignes[id], [field]: value };
    this.setState({
      lignes: { ...this.state.lignes, [id]: lineTargetted },
    });
  },

  onChangeFieldLine (e, id) {
    this.setState({
      lignesOrder: this.state.lignesOrder.map(function (ligne) {
        if (ligne.id === id) {
          return ligne[e.target.name] = e.target.value;
        }
      })
    });
  },

  displayTicketLineProduct () {
    return this.state.lignesOrder && this.state.lignesOrder.map(function (ligne) {
      return <TicketLigneProduitForm
        key={ ligne }
        id={ ligne }
        editProductLine={ this.editProductLine }
        deleteProductLine={ this.deleteProductLine }
        products={ this.props.products }
        units={ this.props.units }
        />
    }.bind( this ))
  },

  onChangeDate (e) {
    this.setState({
      date: e.value
    })
  },

  addTicket (e) {
    e.preventDefault();
    const newTicket = {
      id: uuid.v1(),
      date: this.state.date,
      magasin: this.state.magasin,
      montant: '',
      description: '',
      lineProduct: {
        items: this.state.lignes,
        orders: this.state.lignesOrder
      }
    }
    this.props.dispatch(addTicket(newTicket));
  },

  render () {
    return (
      <Segment>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input label='Date' name="date" placeholder='01/01/01' value={ this.state.date } onChange={this.onChangeDate}/>
            <Form.Select label='Magasin' name="magasin" options={ this.props.magasins } placeholder='Selectionnez' />
          </Form.Group>
          { this.displayTicketLineProduct() }
          <Form.Button content='Nouvelle ligne' onClick={ this.addProductLine }/>
          <Form.Button color='green' onClick={ this.addTicket }>Enregistrer le ticket</Form.Button>
        </Form>
      </Segment>
    )
  }
})

const TicketsBox = React.createClass({
  render () {
    return (
      <div>
        <TicketsForm units={ this.props.units } magasins={ this.props.magasins } dispatch={this.props.dispatch} products={ this.props.products }/>
        <TicketsListWrapper />
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  const magasinsToArray = _.values(state.magasin);
  const unitsToArray = _.values(state.units);
  const productsToArray = _.values(state.products);

  const magasinsFormated = magasinsToArray.map(function (magasin) {
    return { key: magasin.id, text: `${getChaineNom(state.chaine, magasin.chaine)} - ${magasin.adresse}`, value: magasin.id }
  });

  const unitsFormatted = unitsToArray.map(function (unit) {
    return { key: unit.id, text: `${unit.description}`, value: `${unit.id}` }
  });

  const productsFormatted = productsToArray.map(function (product) {
    return { key: product.id, text: `${product.name}`, value: `${product.id}` }
  });

  return {
    magasins: magasinsFormated,
    units: unitsFormatted,
    products: productsFormatted
  }
}

export default connect(mapStateToProps)(TicketsBox)
