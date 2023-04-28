
export interface IProductInterface {
  id: number;
  name: string;
  imageUrl: string;
  supplierId: number;
  wholesalePrice: number;
  price: number;
  categories: string[]
}

export interface MatchedProductInterface extends IProductInterface {
  unitQuantity: number
}

export interface CartItemInterface {
  productId: number;
  unitQuantity: number;
}

export interface MatchedProductsInterface {
  matchedProducts: {
    [key: number]: MatchedProductInterface
  };
}

export interface CartInterface extends MatchedProductsInterface {
  items: CartItemInterface[];
  couponCode?: string;
} 

export interface RenderedProductProps {
  width: number;
}

export type ICartProductPropsInterface = {
  product: {
    id: number;
    name: string;
    imageUrl: string;
    supplierId: number;
    wholesalePrice: number;
    price: number;
    categories: string[],
    unitQuantity: number
  },
  width: number
};

export interface IProductProps {
  products: IProductInterface[],
  transferProductToCart: any
}

export type PromoCodeInterface = {
  Code: string;
  Description: string;
  Type: number;
  Discount?: number;
  Category?: string;
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