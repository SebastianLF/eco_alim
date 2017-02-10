import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux';
import App from './containers/App'
import Tickets from './containers/TicketsList'
import Ticket from './Ticket'
import Home from './Home'
import store from './redux/store'

const Routes = (props) => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/about" />
          <Route path="/tickets/:ticketId" component={Ticket}/>
          <Route path="*" />
        </Route>
      </Router>
    </Provider>
  )
}

export default Routes