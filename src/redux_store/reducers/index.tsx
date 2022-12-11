import { combineReducers } from 'redux';
import elementsReducer from './elementsReducer';
import moleculesReducer from './moleculesReducer';
import panelSizesReducer from './panelSizesReducer';


export default combineReducers({
  table: elementsReducer,
  molecules: moleculesReducer,
  panelSizes: panelSizesReducer
});