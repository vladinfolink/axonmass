
export interface IProductInterface {
  id: number;
  name: string;
  imageUrl: string;
  supplierId: number;
  wholesalePrice: number;
  price: number;
  categories: string[]
}

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