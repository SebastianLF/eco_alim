import React from 'react'
import { connect } from 'react-redux'
import { Header, Card, Button, Segment, Form, Label, Input, Checkbox } from 'semantic-ui-react'
import uuid from 'uuid'
import TicketsList from '../components/TicketsList'
import TicketLigneProduitForm from '../components/TicketLigneProduitForm';
import getMonthName from '../helpers/getMonthName'
import getTimeNow from '../helpers/getTimeNow'
import { getChaineNom } from '../redux/modules/magasin'
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

const TicketsForm = React.createClass({

  getInitialState () {
    return {
      date: getTimeNow(),
      magasin: '1',
      lignes: []
    }
  },

  addProductLine (e) {
    e.preventDefault();
    this.setState({
      lignes: this.state.lignes.concat([{ key: uuid.v1() }])
    })
  },

  deleteProductLine (e, key) {
    e.preventDefault();
    this.setState({
      lignes: this.state.lignes.filter(function (ligne) {
        return ligne.key !== key
      })
    })
  },

  displayTicketLineProduct () {
    return this.state.lignes && this.state.lignes.map(function (ligne) {
      return <TicketLigneProduitForm key={ ligne.key } deleteProductLine={ this.deleteProductLine } ligne={ligne}/>
    }.bind( this ))
  },

  onChangeDate (e) {
    this.setState({
      date: e.value
    })
  },

  enregistrerTicket () {

  },

  render () {
    console.log(this.props.magasins);
    return (
      <Segment>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input label='Date' name="date" placeholder='01/01/2001' value={ this.state.date } onChange={this.onChangeDate}/>
            <Form.Select label='Magasin' name="magasin" options={ this.props.magasins } placeholder='Selectionnez' />
          </Form.Group>
          { this.displayTicketLineProduct() }
          <Form.Button content='Nouvelle ligne' onClick={ this.addProductLine }/>
          <Form.Button color='green' onClick={ this.enregistrerTicket }>Enregistrer le ticket</Form.Button>
        </Form>
      </Segment>
    )
  }
})

const TicketsBox = React.createClass({
  render () {
    return (
      <div>
        <TicketsForm magasins={this.props.magasins}/>
        <TicketsList />
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  const magasinsToArray = _.values(state.magasin);

  const magasinsFormated = magasinsToArray.map(function (magasin) {
    return { key: magasin.id, text: `${getChaineNom(state.chaine, magasin.chaine)} - ${magasin.adresse}`, value: magasin.id }
  });

  return {
    magasins: magasinsFormated
  }
}

export default connect(mapStateToProps)(TicketsBox)
