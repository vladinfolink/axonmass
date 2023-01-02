/* eslint-disable import/no-anonymous-default-export */

import { IPanelValue } from "../../types";

const defaultPanelValues = {
  width: 1000,
  height: 1000
};

export default (s: {
  [key: string]: IPanelValue
} = {
    A: { ...defaultPanelValues },
    B: { ...defaultPanelValues },
    C: { ...defaultPanelValues },
    D: { ...defaultPanelValues },
    E: { ...defaultPanelValues },
  },
  action: {
    type: string;
    panelId: string;
    value: IPanelValue
  }) => {
  switch (action.type) {
    case 'REGISTER_PANEL_WIDTH':
      return {
        ...s,
        [action.panelId]: {
          ...s[action.panelId],
          width: action.value
        }
      };
    case 'REGISTER_PANEL_HEIGHTS_A_B_C':
      return {
        ...s,
        A: {
          ...s['A'],
          height: action.value
        },
        B: {
          ...s['B'],
          height: action.value
        },
        C: {
          ...s['C'],
          height: action.value
        }
      };
    case 'REGISTER_PANEL_HEIGHT_D':
      return {
        ...s,
        D: {
          ...s['D'],
          height: action.value
        }
      };
    case 'REGISTER_PANEL_HEIGHT_E':
      return {
        ...s,
        E: {
          ...s['E'],
          height: action.value
        }
      };
    default:
      return { ...s };
  }
};
