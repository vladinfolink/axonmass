/* eslint-disable import/no-anonymous-default-export */
import { periodicTable } from "../periodic_table";

export default (table = {
  elements: [...periodicTable.elements],
  filteredElements: []
}, action: { type: string; filteredElements: any; }) => {
  switch (action.type) {
    case 'FILTER_ELEMENTS':
      return {
        ...table,
        filteredElements: [...action.filteredElements]
      };
    default:
      return {...table};
  }
};
