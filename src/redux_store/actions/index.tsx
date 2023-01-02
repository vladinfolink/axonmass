import { periodicTable } from "../periodic_table";
import { appendElementData } from "../../helpers";

type periodicElementType = typeof periodicTable.elements[0]

export const filterElements = (value: string) => async (dispatch: (arg0: { type: string; filteredElements: any; }) => void) => {
  const filteredElements = !!value ? periodicTable.elements.filter((element: periodicElementType) => element.name.toLowerCase().startsWith(value.toLowerCase())).map(appendElementData) : [];

  dispatch({ type: 'FILTER_ELEMENTS', filteredElements });
};

export const registerPanelSize = (panelId: string, value: number) => async (dispatch: any) => {
  const dimentionScopes: { [key: string]: string } = {
    A: 'REGISTER_PANEL_WIDTH',
    B: 'REGISTER_PANEL_WIDTH',
    C: 'REGISTER_PANEL_WIDTH',
    D: 'REGISTER_PANEL_WIDTH',
    E: 'REGISTER_PANEL_WIDTH',
    HEIGHTS_A_B_C: 'REGISTER_PANEL_HEIGHTS_A_B_C',
    HEIGHT_D: 'REGISTER_PANEL_HEIGHT_D',
    HEIGHT_E: 'REGISTER_PANEL_HEIGHT_E',
  }
  dispatch({ type: dimentionScopes[panelId], panelId, value });
};

export const transferCompiledMolecule = (filteredElement: any) => async (dispatch: any) => {

  dispatch({
    type: 'TRANSFER_TO_COMPILED_MOLECULE',
    payload:  {...appendElementData(filteredElement).data}
  });
};

// export const fetchMoleculeDeepStructure = (id: string) => async (dispatch: any) => {
// const response = await lb.get(`/mls/${id}`);

// dispatch({ type: 'FETCH_MOLECULES', payload: response.data });
// };

// export const fetchPostsAndUsers = () => async (dispatch, getState) => {
//   await dispatch(fetchPosts());

//   _.chain(getState().posts)
//     .map('userId')
//     .uniq()
//     .forEach(id => dispatch(fetchUser(id)))
//     .value();
// };