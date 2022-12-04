import { combineReducers } from 'redux';
import elementsReducer from './elementsReducer';
import moleculesReducer from './moleculesReducer';

export default combineReducers({
  table: elementsReducer,
  molecules: moleculesReducer
});