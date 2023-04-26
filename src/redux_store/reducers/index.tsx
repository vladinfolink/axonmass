import { combineReducers } from 'redux';
import { cartReducer, categoriesReducer, productsReducer, sortingReducer } from './compiledReducer';
import panelSizesReducer from './panelSizesReducer';

export const combinedReducers = combineReducers({
  panelSizes: panelSizesReducer,
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  sorting: sortingReducer
});

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