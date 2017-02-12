import React from 'react'
import { connect } from 'react-redux'
import { Header, Button, Segment, Form, Label, Input, Checkbox } from 'semantic-ui-react'
import TicketsList from '../components/TicketsList'
import getMonthName from '../helpers/getMonthName'
import { getChaineNom } from '../redux/modules/magasin'
var _ = require("lodash");

const BarCompta = () => {
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
  render () {
    return (
      <Segment>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input label='Date' name="date" placeholder='01/01/2001' />
            <Form.Select label='Magasin' name="magasin" options={this.props.magasins} placeholder='Selectionnez' />
          </Form.Group>
          <Form.Button>Ajouter</Form.Button>
        </Form>
      </Segment>
    )
  }
})

const TicketsBox = React.createClass({
  render () {
    return (
      <div>
        <BarCompta />
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
