import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { MdAdd, MdRemove } from 'react-icons/md';
import { IProductPropsInterface } from '../../types';
import { CartRenderedProduct, CartRenderedProductContent, CartProductImageContainer, CartProductImage, CartProductDetails, CartProductName, CartProductPrice } from '../../view';

const IconContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
  color: #555;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;

  &:hover {
    background-color: #e0e0e0;
    color: #333;
`;

const CartProduct = ({ product }: IProductPropsInterface): JSX.Element => {
  const dispatch = useDispatch();
  const width = useSelector((state: any) => state.panelSizes.D.width);

  const render = <CartRenderedProduct width={width}>
  <CartRenderedProductContent>
    <IconContainer>
      <StyledIcon onClick={async () => {
        dispatch({ type: 'REMOVE_PRODUCT_FROM_CART', payload: product.id });
      }}>
        <MdRemove size={18} />
      </StyledIcon>
      <StyledIcon onClick={async () => {
        dispatch({ type: 'TRANSFER_PRODUCT_TO_CART', payload: product.id });
        dispatch({
          type: 'MATCH_PRODUCT_TO_CART',
          productToMatch: { ...product }
        });
      }}>
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