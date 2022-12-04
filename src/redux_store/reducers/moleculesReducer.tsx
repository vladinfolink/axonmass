/* eslint-disable import/no-anonymous-default-export */
export default (state = [], action: { type: string; payload: any; }) => {
  switch (action.type) {
    case 'FETCH_MOLECULES':
      return [...state, action.payload];
    default:
      return state;
  }
};