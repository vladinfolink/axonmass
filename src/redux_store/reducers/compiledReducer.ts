import { IProductInterface } from "../../types";

function removeProductIdFromArray(array: string[], id: string) {
  const _items = [...array];

  const index = _items.indexOf(id);
  if (index !== -1) {
    _items.splice(index, 1);
  }

  return [..._items];
}

/**\
 items:
  productId	integer($int32)
  unitQuantity	integer($int32)

  couponCode
 */

  interface CartItemInterface {
    productId: number;
    unitQuantity: number;
  }

  interface CartInterface {
    items: CartItemInterface[];
    couponCode?: string;
  }

  function includeProductInCartItems(cart: CartInterface, productId: number) {
    const _cart: CartInterface =  JSON.parse(JSON.stringify(cart));
    const item = _cart.items.find((cartItem) => {
      return cartItem?.productId === productId
    });

    if (item) {
      item.unitQuantity++
    } else {
      _cart.items.push({
        productId, unitQuantity: 1
      })
    }

    return { ..._cart, }
  }

export const cartReducer = (cart: CartInterface = {
  items: [],
  couponCode: ''
}, action: { type: string; payload: number; }) => {
  switch (action.type) {

    case 'TRANSFER_PRODUCT_TO_CART':
      return {
        ...includeProductInCartItems(cart, action.payload)

      };

    case 'REMOVE_PRODUCT_FROM_CART':
      return {
        
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

/**
 
  Cart{
items	[...]
couponCode	string
}

CartItem{
productId	integer($int32)
unitQuantity	integer($int32)
}

CartCalculationResult{
itemsCost	number($double)
shippingCost	number($double)
discount	number($double)
finalCost	number($double)
readOnly: true
}

Product{
id	integer($int32)
name	string
imageUrl	string
supplierId	integer($int32)
wholesalePrice	number($double)
price	number($double)
categories	[...]
}

 */
