/* eslint-disable import/no-anonymous-default-export */

export default (s = {
  A: 1, B: 1, C: 1, D: 1, E: 1
}, action: { type: string; panelId: string; value: number}) => {
  switch (action.type) {
    case 'REGISTER_PANEL_SIZE':
      return {
        ...s,
        [action.panelId]: action.value
      };
    default:
      return {...s};
  }
};
