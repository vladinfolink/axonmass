/* eslint-disable import/no-anonymous-default-export */
export default (compiledMolecule = {
  data: {
    nodes: [],
    links: []
  }
}, action: { type: string; payload: any; }) => {
  switch (action.type) {
    case 'TRANSFER_TO_COMPILED_MOLECULE':
      return {
        ...compiledMolecule,
        data: {
          ...compiledMolecule.data,
          ...action.payload
        }
      };
    default:
      return {...compiledMolecule};
  }
};
