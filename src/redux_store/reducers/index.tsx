import { combineReducers } from 'redux';
import compiledMoleculeReducer from './compiledMoleculeReducer';
import elementsReducer from './elementsReducer';
import moleculesReducer from './moleculesReducer';
import panelSizesReducer from './panelSizesReducer';

export const combinedReducers = combineReducers({
  table: elementsReducer,
  molecules: moleculesReducer,
  panelSizes: panelSizesReducer,
  compiledMolecule: compiledMoleculeReducer
});

// ----------REDUX STORE TYPE:
type CombinedType = ReturnType<typeof combinedReducers>;

type R0 = Omit<CombinedType, 'table' | 'molecules' | 'panelSizes'>;  

export type ReduxStoreType = R0 & {table: any, molecules: any, panelSizes: any };
// ----------REDUX STORE TYPE^

