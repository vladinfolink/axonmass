import { combineReducers } from 'redux';
import elementsReducer from './elementsReducer';
import moleculesReducer from './moleculesReducer';
import panelSizesReducer from './panelSizesReducer';

export const combinedReducers = combineReducers({
  table: elementsReducer,
  molecules: moleculesReducer,
  panelSizes: panelSizesReducer
});

