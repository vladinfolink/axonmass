import { useSelector } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { AddToCartIcon, ProductDetails, ProductImage, ProductImageContainer, ProductName, ProductPrice, RenderedProduct, RenderedProductContent } from '../../view';
import { IProductInterface } from '../../types';

type IProductPropsInterface = {
  product: IProductInterface,
  width: number,
  transferProductToCart: (productId: number) => (dispatch: (arg0: {
    type: string;
    payload: number;
  }) => void) => Promise<void>
};

const Product = ({ product, transferProductToCart }: IProductPropsInterface) => {
  const width = useSelector((state: any) => state.panelSizes.E.width);

  return (
    <RenderedProduct width={width}>
      <RenderedProductContent>
        <ProductImageContainer>
          <ProductImage src={product.imageUrl} alt={product?.name} />
        </ProductImageContainer>
        <ProductDetails>
          <ProductName>{product.name}</ProductName>
          <div>ID: {product.id}</div>
          <div>Supplier ID: {product.supplierId}</div>
          <div>Wholesale Price: {product.wholesalePrice}</div>
          <ProductPrice>Price: {product.price}</ProductPrice>
          <div>Categories: {product.categories.join(', ')}</div>
        </ProductDetails>
      </RenderedProductContent>
      <AddToCartIcon onClick={() => {
        try {
          transferProductToCart(product.id);
        } catch (error) {
          console.log('ERROR' + error);
        }
      }}>
        <MdAddShoppingCart size={24} />
      </AddToCartIcon>
    </RenderedProduct>
  )
}

export default Product;
