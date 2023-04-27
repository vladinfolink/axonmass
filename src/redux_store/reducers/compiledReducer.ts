import { IProductInterface } from "../../types";

function removeProductIdFromArray(array: string[], id: string) {
  const _items = [...array];

  const index = _items.indexOf(id);
  if (index !== -1) {
    _items.splice(index, 1);
  }

  return [..._items];
}

export const cartReducer = (cart: {
  items: string[],
  couponCode: null | string
} = {
    items: [],
    couponCode: null
  }, action: { type: string; payload: string; }) => {
  switch (action.type) {

    case 'TRANSFER_PRODUCT_TO_CART':
      return {
        ...cart,
        items: [
          ...cart.items,
          action.payload
        ]
      };

    case 'REMOVE_PRODUCT_FROM_CART':
      return {
        ...cart,
        items: [
          ...removeProductIdFromArray(
            [
              ...cart.items
            ],
            action.payload
          )
        ]
      };

    default:
      return { ...cart };
  }
};

export const productsReducer = (products: IProductInterface[] = [], action: { type: string; payload: IProductInterface[]; }) => {
  switch (action.type) {

    case 'FETCH_PRODUCTS':
      return [...action.payload];

    default:
      return [...products];
  }
};

export const categoriesReducer = (categories: string[] = [], action: { type: string; payload: string[]; }) => {
  switch (action.type) {

    case 'FETCH_CATEGORIES':
      return [...action.payload]; 

    default:
      return [...categories];
  }
};

export const sortingReducer = (categories: {
  alphabetically: boolean;
  prices: boolean
} = {
  alphabetically: false,
  prices: true
}, action: { type: string; payload: string[]; }) => {
  switch (action.type) {

    case 'SORT_PRODUCTS':
      return [...action.payload];

    default:
      return {
        
      };
  }
};

