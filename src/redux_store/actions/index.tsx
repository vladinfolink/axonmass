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

export const fetchUser = (id: string) => async (dispatch: any) => {
  // const response = await jsonPlaceholder.get(`/users/${id}`);

  // dispatch({ type: 'FETCH_MOLECULES', payload: response.data });
};
