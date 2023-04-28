import { useDispatch, useSelector } from 'react-redux';
import { MdAdd, MdRemove } from 'react-icons/md';
import { ICartProductPropsInterface } from '../../types';
import { CartRenderedProduct, CartRenderedProductContent, CartProductImageContainer, CartProductImage, CartProductDetails, CartProductName, CartProductPrice, IconContainer, StyledIcon } from '../../view';

const CartProduct = ({ product }: ICartProductPropsInterface) => {
  const dispatch = useDispatch();
  const width = useSelector((state: any) => state.panelSizes.D.width);

  const removeProductFromCartHandler = () => {
    dispatch({ type: 'REMOVE_PRODUCT_FROM_CART', payload: product.id });
  };
  const transferProductToCartHandler = () => {
    dispatch({ type: 'TRANSFER_PRODUCT_TO_CART', payload: product.id });
    dispatch({
      type: 'MATCH_PRODUCT_TO_CART',
      productToMatch: { ...product }
    });
  }

  const render = <CartRenderedProduct width={width}>
    <CartRenderedProductContent>
      <IconContainer>
        <StyledIcon onClick={() => removeProductFromCartHandler()}>
          <MdRemove size={18} />
        </StyledIcon>
        <StyledIcon onClick={() => transferProductToCartHandler()}>
          <MdAdd size={18} />
        </StyledIcon>
      </IconContainer>
      <CartProductImageContainer>
        <CartProductImage src={product?.imageUrl} alt={product?.name} />
      </CartProductImageContainer>
      <CartProductDetails>
        <CartProductName>{product?.name}</CartProductName>
        <div>QUANTITY: {product?.unitQuantity}</div>
        <div>ID: {product?.id}</div>
        <div>Supplier ID: {product?.supplierId}</div>
        <div>Wholesale Price: {product?.wholesalePrice}</div>
        <CartProductPrice>Price: {product?.price}</CartProductPrice>
        <div>Categories: {product?.categories?.join(', ')}</div>
      </CartProductDetails>
    </CartRenderedProductContent>
  </CartRenderedProduct>

  return render;
}

export default CartProduct;