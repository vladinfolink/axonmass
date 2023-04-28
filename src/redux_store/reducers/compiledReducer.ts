import { CartInterface, IProductInterface, MatchedProductInterface } from "../../types";

/**\
 items:
  productId	integer($int32)
  unitQuantity	integer($int32)

  couponCode
 */

function includeProductInCartItems(cart: CartInterface, productId: number) {
  const _cart: CartInterface = JSON.parse(JSON.stringify(cart));
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
};

function matchProductToCart(cart: CartInterface, productToMatch: IProductInterface) {
  const _cart: CartInterface = JSON.parse(JSON.stringify(cart));
  const item = _cart.matchedProducts[productToMatch.id];

  if (item) {
    item.unitQuantity++
  } else {
    _cart.matchedProducts[productToMatch.id] = {
      ...productToMatch,
      unitQuantity: 1
    }
  }

  return { ..._cart, }
}

function decreaseProductInCart(cart: CartInterface, productId: number) {
  const _cart: CartInterface = JSON.parse(JSON.stringify(cart));
  const item = _cart.items.find((cartItem) => {
    return cartItem?.productId === productId;
  });
  const matchedProduct = _cart.matchedProducts[productId];

  const idx = _cart.items.findIndex((cartItem) => {
    return cartItem?.productId === productId;
  })

  if (!!item && (item?.unitQuantity > 1)) {
    item.unitQuantity--;
    matchedProduct.unitQuantity--;
  } else {
    _cart.items.splice(idx, 1);
    delete _cart.matchedProducts[productId];
  }

  return { ..._cart, }
};

export const cartReducer = (cart: CartInterface = {
  items: [],
  couponCode: '',
  matchedProducts: {}
}, action: { type: string; payload: number; productToMatch: IProductInterface }) => {
  switch (action.type) {

    case 'TRANSFER_PRODUCT_TO_CART':
      return {
        ...includeProductInCartItems(cart, action.payload)

      };

    case 'MATCH_PRODUCT_TO_CART':
      return matchProductToCart({ ...cart }, action.productToMatch)

    case 'REMOVE_PRODUCT_FROM_CART':
      return {
        ...decreaseProductInCart({...cart},  action.payload)
      }

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
