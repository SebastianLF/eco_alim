import { combineReducers } from 'redux';
import info from './info';
import tickets from './tickets';
import magasin from './magasin';
import chaine from './chaine';
import unit from './unit';
import product from './product';

const appstate = {
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
  info,
  units: unit,
  products: product
})

export default appState
