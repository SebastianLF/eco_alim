const LOAD = 'fincas/tickets/LOAD';
const LOAD_SUCCESS = 'fincas/tickets/LOAD_SUCCESS';
const LOAD_FAIL = 'fincas/tickets/LOAD_FAIL';
const DISPLAY_LIST = 'fincas/tickets/DISPLAY_LIST';
const UPDATE_SELECTED = 'fincas/tickets/UPDATE_SELECTED';

const initialState = {
  'order': [1, 2, 3],
  'selected': '',
  'tickets': {
    '1': {
      id: "1",
      date:"11/02/07",
      magasin:"1",
      montant:"38.23"
    },
    '2': { id: "2", date:"21/01/07", magasin:"SATORIZ", montant:"14.56" },
    '3': { id: "3", date:"08/02/07", magasin:"LA VIE CLAIRE", montant:"52.53" }
  },
  "produits": {
    "1": {
      id: "1",
      nom: "thon rouge albacore",
    }
  },
  "magasin": {
    "1": {
      id: "1",
      adresse: "ST PRIEST",
      chaine: "3"
    },
    "2": {
      id: "2",
      adresse: "LES SEPT CHEMINS",
      chaine: "1"
    },
    "3": {
      id: "3",
      adresse: "ST BONNET DE MURE",
      chaine: "2"
    },
  },
  "chaine": {
    "1": "SATORIZ",
    "2": "LA VIE CLAIRE",
    "3": "BIOCOOP"
  },
  "unité": {
    "1": {
      nom: "PU",
      description: "Prix unitaire"
    },
    "2": {
      nom: "P",
      description: "Poids"
    },
    "3": {
      nom: "L",
      description: "Litre"
    }
  },
  "categorie": {
    "1": {
      id: "1",
      nom: "aliments"
    }
  },
  "souscat": {
    "1": {
      id: "1",
      nom: "légumes",
      cat: "1"
    }
  }
};

export function selectTicket(id){
  return {
    type: UPDATE_SELECTED,
    payload: id
  }
}

export default function tickets(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return { ...state, tickets: action.payload }
    default:
      return state;
  }
}
