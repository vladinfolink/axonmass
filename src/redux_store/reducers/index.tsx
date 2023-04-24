import { combineReducers } from 'redux';
import { cartReducer, productsReducer } from './compiledReducer';
import panelSizesReducer from './panelSizesReducer';

export const combinedReducers = combineReducers({
  panelSizes: panelSizesReducer,
  products: productsReducer,
  cart: cartReducer
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