import { combineReducers, createStore } from 'redux';
import { companiesReducer } from './companiesReducer';

const rootReducer = combineReducers({
    companies : companiesReducer,
  })

export const store = createStore(rootReducer);