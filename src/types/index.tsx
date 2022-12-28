import { ThemedStyledProps } from "styled-components";
import { combinedReducers } from "../redux_store/reducers";

export type FilteredChemicalElementBoxPropsType = ThemedStyledProps<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
  D: { width: number, height: number }
}, any>;

export interface IPanelValue {
  height: number,
  width: number
}

export interface IAtomNameInterface { atomNameStyle: { [key: string]: string; } };

// ----------REDUX STORE TYPE:
type CombinedType = ReturnType<typeof combinedReducers>;

type R0 = Omit<CombinedType, 'table' | 'molecules' | 'panelSizes'>;  

export type ReduxStoreType = R0 & {table: any, molecules: any, panelSizes: any };
// ----------REDUX STORE TYPE^
