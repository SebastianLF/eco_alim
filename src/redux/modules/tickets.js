import uuid from 'uuid';
var _ = require("lodash");

const LOAD = 'fincas/tickets/LOAD';
const LOAD_SUCCESS = 'fincas/tickets/LOAD_SUCCESS';
const LOAD_FAIL = 'fincas/tickets/LOAD_FAIL';
const DISPLAY_LIST = 'fincas/tickets/DISPLAY_LIST';
const UPDATE_SELECTED = 'fincas/tickets/UPDATE_SELECTED';
const ADD_TICKET_SUCCESS = 'fincas/tickets/ADD_TICKET_SUCCESS';
const ADD_FAIL = 'fincas/tickets/ADD_FAIL';
const DELETE_TICKET_SUCCESS = 'fincas/tickets/DELETE_TICKET_SUCCESS';

const test = {
    orders: [1, 2, 3],
    liste: {
      '1': {
        id: "1",
        date:"11/02/07",
        magasin: "1",
        montant:"37.23",
        description: 'Une description super.',
        lineProduct: {
          items: {
            '1': { id: '1', produit: '1', pu: '5O', qte: '3', pp: '150' },
            '2': { id: '2', produit: '2', pu: '5O', qte: '3', pp: '150' },
            '3': { id: '3', produit: '3', pu: '5O', qte: '3', pp: '150' }
          },
          orders: ['1', '2', '3']
        }
      },
      '2': {
        id: "2",
        date:"21/01/07",
        magasin:"2",
        montant:"14.56",
        description: '',
        lineProduct: {
          items: {
            '1': { id: '1', produit: '1', pu: '5O', qte: '3', pp: '150' },
            '2': { id: '2', produit: '2', pu: '5O', qte: '3', pp: '150' },
            '3': { id: '3', produit: '3', pu: '5O', qte: '3', pp: '150' }
          },
          orders: ['1', '2', '3']
        }
      },
      '3': {
        id: "3",
        date:"08/02/07",
        magasin:"3",
        montant:"52.53",
        description: '',
        lineProduct: {
          items: {
            '1': { id: '1', produit: '1', pu: '5O', qte: '3', pp: '150' },
            '2': { id: '2', produit: '2', pu: '5O', qte: '3', pp: '150' },
            '3': { id: '3', produit: '3', pu: '5O', qte: '3', pp: '150' }
          },
          orders: ['1', '2', '3']
        }
      }
    },
}

const initialState = {
  orders: [],
  liste: {}
};

export default function tickets(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case ADD_TICKET_SUCCESS:
      return { ...state, orders: state.orders.concat([action.payload.id]), liste: { ...state.liste, [action.payload.id]: action.payload } };
    case DELETE_TICKET_SUCCESS:
      const newOrders = state.orders.filter(function (order) {
        return order !== action.payload
      });
      return { ...state, orders: newOrders, liste: _.pick(state.liste, newOrders) }
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

export function deleteTicket(ticketId) {
  return {
    type: DELETE_TICKET_SUCCESS,
    payload: ticketId
  }
}

export function getShopAddress(shopState, shopId) {
  return shopState[shopId];
}

export function getChainName(chaineState, chaineId) {
  return chaineState[chaineId];
}

export function getProductName(productState, productId) {
  return productState[productId]
}

export function getUnitName(unitState, unitId) {
  return unitState[unitId]
}

export function displayLineProductsInOrder(globalState, ticketId) {
  return globalState.tickets.liste[ticketId].lineProduct.orders.map(function (lineId) {
    return { ...globalState.tickets.liste[ticketId].lineProduct.items[lineId],
      product: getProductName(globalState.products, globalState.tickets.liste[ticketId].lineProduct.items[lineId].product),
      unit: getUnitName(globalState.units, globalState.tickets.liste[ticketId].lineProduct.items[lineId].unit),
    }
  })
}

export function getTicketsInOrder(globalState) {

  return globalState.tickets.orders.map(function (ticketId) {
    const ticket = globalState.tickets.liste[ticketId];
    const magasin = getShopAddress(_.cloneDeep(globalState.magasin), ticket.magasin);
    magasin.chaine = getChainName(globalState.chaine, magasin.chaine);
    return { ...ticket, ...{ magasin: magasin } };
  })

}
