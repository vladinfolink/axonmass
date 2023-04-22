import { combineReducers } from 'redux';
import compiledMoleculeReducer from './compiledMoleculeReducer';
import elementsReducer from './elementsReducer';
import panelSizesReducer from './panelSizesReducer';

export const combinedReducers = combineReducers({
  table: elementsReducer,
  panelSizes: panelSizesReducer,
  compiledMolecule: compiledMoleculeReducer
});

// ----------REDUX STORE TYPE:
type CombinedType = ReturnType<typeof combinedReducers>;

type R0 = Omit<CombinedType, 'table' | 'panelSizes'>;  

export type ReduxStoreType = R0 & {table: any, molecules: any, panelSizes: any };
// ----------REDUX STORE TYPE^

