import React from 'react'
import { connect } from 'react-redux'
import { Header, Card, Button, Segment, Form, Label, Input, Checkbox } from 'semantic-ui-react'
import TicketsList from '../components/TicketsList'
import getMonthName from '../helpers/getMonthName'
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

const items = [
  {
    header: 'Project Report - April',
    description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%',
  },
  {
    header: 'Project Report - May',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
  }
]

const CardExampleGroupProps = () => (
  <Card.Group items={items} />
)

const TicketsForm = React.createClass({
  render () {
    return (
      <Segment>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input label='Date' name="date" placeholder='01/01/2001' />
            <Form.Select label='Magasin' name="magasin" options={this.props.magasins} placeholder='Selectionnez' />
          </Form.Group>
          <Form.Button color='red'>Ajouter un ticket</Form.Button>
        </Form>
      </Segment>
    )
  }
})

const TicketsBox = React.createClass({
  render () {
    return (
      <div>
        <CardExampleGroupProps />
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
