const DISPLAY_LIST = 'fincas/produit/DISPLAY_LIST';

const initialState = {
  "1": {
    id: "1",
    name: "thon rouge albacore",
  },
  "2": {
    id: "2",
    name: "crousti choc",
  },
  "3": {
    id: "3",
    name: "carotte",
  }
}

function produit(state = initialState, action) {
 switch (action) {
   case DISPLAY_LIST:
   default:
    return state
 }
}

export default produit;
