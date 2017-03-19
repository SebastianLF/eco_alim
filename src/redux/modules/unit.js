const DISPLAY_LIST = 'fincas/unit/DISPLAY_LIST';

const initialState = {
  "1": {
    id: "1",
    name: "PU",
    description: "Prix unitaire"
  },
  "2": {
    id: "2",
    name: "P",
    description: "Poids"
  },
  "3": {
    id: "3",
    name: "L",
    description: "Litre"
  }
}

function unit(state = initialState, action) {
 switch (action) {
   case DISPLAY_LIST:
   default:
    return state
 }
}

export default unit;
