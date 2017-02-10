import { createStore, combineReducers } from 'redux'
import reducers from './modules/reducer'

const store = createStore(reducers);

export default store;
