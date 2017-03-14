import uuid from 'uuid';

const LOAD = 'fincas/tickets/LOAD';
const LOAD_SUCCESS = 'fincas/tickets/LOAD_SUCCESS';
const LOAD_FAIL = 'fincas/tickets/LOAD_FAIL';
const DISPLAY_LIST = 'fincas/tickets/DISPLAY_LIST';
const UPDATE_SELECTED = 'fincas/tickets/UPDATE_SELECTED';
const ADD_TICKET_SUCCESS = 'fincas/tickets/ADD_TICKET_SUCCESS';
const ADD_FAIL = 'fincas/tickets/ADD_FAIL';

const initialState = {
    ordre: [1, 2, 3],
    liste: {
      '1': {
        id: "1",
        date:"11/02/07",
        magasin: "1",
        montant:"37.23",
        description: 'Une description super.',
        lignes: [
          { id: '1', produit: '1', pu: '5O', qte: '3', pp: '150' },
          { id: '2', produit: '2', pu: '5O', qte: '3', pp: '150' },
          { id: '3', produit: '3', pu: '5O', qte: '3', pp: '150' }
        ]
      },
      '2': { id: "2", date:"21/01/07", magasin:"2", montant:"14.56", description: '', lignes: [] },
      '3': { id: "3", date:"08/02/07", magasin:"3", montant:"52.53", description: '', lignes: [] }
    },
}

export default function tickets(state = initialState, action) {
  switch (action.type) {
    case ADD_TICKET_SUCCESS:
      const id = uuid.v1();
      const liste = state.liste;
      liste[id] = action.ticket;
      return { ...state, ordre: state.ordre.concat([id]), liste: liste }
    default:
      return state;
  }
}

export function addTicket(ticket) {

  return {
    type: ADD_TICKET_SUCCESS,
    payload: ticket
  }
}
