/* eslint-disable import/no-anonymous-default-export */
export default (compiledMolecule = {
 elementsInChart: []
}, action: { type: string; payload: any; }) => {
  switch (action.type) {
    case 'TRANSFER_TO_COMPILED_MOLECULE':
      return {
        ...compiledMolecule,
        elementsInChart: [
          ...compiledMolecule.elementsInChart,
          action.payload
        ]
      };
    default:
      return {...compiledMolecule};
  }
};
