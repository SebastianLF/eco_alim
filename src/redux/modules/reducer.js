import { combineReducers } from 'redux';
import info from './info';
import tickets from './tickets';
import magasin from './magasin';
import chaine from './chaine';

const appstate = {
  "produits": {
    "1": {
      id: "1",
      nom: "thon rouge albacore",
    }
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

const appState = combineReducers({
  tickets,
  magasin,
  chaine,
  info
})

export default appState
