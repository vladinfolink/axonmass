import { periodicTable } from "../periodic_table";

type periodicElementType = typeof periodicTable.elements[0]

// export const fetchPostsAndUsers = () => async (dispatch, getState) => {
//   await dispatch(fetchPosts());

//   _.chain(getState().posts)
//     .map('userId')
//     .uniq()
//     .forEach(id => dispatch(fetchUser(id)))
//     .value();
// };

export const filterElements = (value: string) => async (dispatch: (arg0: { type: string; filteredElements: any; }) => void) => {
  const filteredElements = !!value ? periodicTable.elements.filter((element: periodicElementType) => element.name.toLowerCase().startsWith(value.toLowerCase())) : [];

  dispatch({ type: 'FILTER_ELEMENTS', filteredElements});
};

export const fetchMoleculeDeepStructure = (id: string) => async (dispatch: any) => {
  // const response = await lb.get(`/mls/${id}`);

  // dispatch({ type: 'FETCH_MOLECULES', payload: response.data });
};

export const registerPanelSize = (panelId: string, value?: number) => async (dispatch: any) => {
  dispatch({ type: 'REGISTER_PANEL_SIZE', panelId, value});
};
