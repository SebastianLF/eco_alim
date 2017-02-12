const LOAD = 'fincas/tickets/LOAD';
const LOAD_SUCCESS = 'fincas/tickets/LOAD_SUCCESS';
const LOAD_FAIL = 'fincas/tickets/LOAD_FAIL';
const DISPLAY_LIST = 'fincas/tickets/DISPLAY_LIST';
const UPDATE_SELECTED = 'fincas/tickets/UPDATE_SELECTED';
const ADD_SUCCESS = 'fincas/tickets/ADD_SUCCESS';
const ADD_FAIL = 'fincas/tickets/ADD_FAIL';

const initialState = {
    'ordre': [1, 2, 3],
    'liste': {
      '1': {
        id: "1",
        date:"11/02/07",
        magasin: "1",
        montant:"37.23"
      },
      '2': { id: "2", date:"21/01/07", magasin:"2", montant:"14.56" },
      '3': { id: "3", date:"08/02/07", magasin:"3", montant:"52.53" }
    }
}

export default function tickets(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export function addTicket(ticket) {
  return {
    type: ADD_SUCCESS,
    payload: ticket
  }
}
