import { ThemedStyledProps } from "styled-components";

export type FilteredChemicalElementBoxPropsType = ThemedStyledProps<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
  D: { width: number, height: number }
}, any>;

export interface IPanelValue {
  height: number,
  width: number
}

export interface IAtomNameInterface { atomNameStyle: { [key: string]: string; } };

