import { connect, useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { MdAdd, MdRemove } from 'react-icons/md';

interface RenderedProductProps {
  width: number;
}

const RenderedProduct = styled.div<RenderedProductProps>`
  flex-basis: calc(33.333% - 1rem);
  margin: 0.5rem;
  height: 405px;

  position: relative;

  border: 1px solid;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;

  overflow: auto;
  word-wrap: break-word;
  white-space: pre-wrap;
  text-overflow: ellipsis;
  
  ${props => {
    if (props.width > 1000) {
      return 'flex-basis: calc(25% - 1rem);';
    } else if (props.width > 800) {
      return 'flex-basis: calc(33.33% - 1rem);';
    } else if (props.width > 480) {
      return 'flex-basis: calc(50% - 1rem);';
    } else {
      return 'flex-basis: calc(100% - 1rem);';
    }
  }}

  &::-webkit-scrollbar {
    width: 6px; 
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 10px; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888; 
    border-radius: 10px;appearance
    background-clip: content-box;box of the thumb
    border: 1px solid transparent; 
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555; 
  }
`;

const RenderedProductContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  position: relative;
`;

const ProductImageContainer = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  padding: 0.5rem;
`;

const ProductName = styled.div`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const ProductPrice = styled.div`
  font-size: 1.2rem;
`;

type IProductInterface = {
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
  width: number,
  transferProductToCart: (productId: number) => (dispatch: (arg0: {
    type: string;
    payload: number;
  }) => void) => Promise<void>
};

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

const CartProduct = ({ product }: IProductInterface): JSX.Element => {
  const dispatch = useDispatch();
  const width = useSelector((state: any) => state.panelSizes.D.width);



  return (
    <RenderedProduct width={width}>
      <RenderedProductContent>
        <IconContainer>
          <StyledIcon onClick={() => {/* handle minus icon click */}}>
            <MdRemove size={18} />
          </StyledIcon>
          <StyledIcon  onClick={() => {
            dispatch({ type: 'TRANSFER_PRODUCT_TO_CART', payload: product.id });
            dispatch({
              type: 'MATCH_PRODUCT_TO_CART',
              payload: 0,
              productToMatch: { ...product }
            });
          }}>
            <MdAdd size={18} />
          </StyledIcon>
        </IconContainer>
        <ProductImageContainer>
          <ProductImage src={product?.imageUrl} alt={product?.name} />
        </ProductImageContainer>
        <ProductDetails>
          <ProductName>{product?.name}</ProductName>
          <div>QUANTITY: {product?.unitQuantity}</div>

          <div>ID: {product?.id}</div>
          <div>Supplier ID: {product?.supplierId}</div>
          <div>Wholesale Price: {product?.wholesalePrice}</div>
          <ProductPrice>Price: {product?.price}</ProductPrice>
          <div>Categories: {product?.categories?.join(', ')}</div>
        </ProductDetails>
      </RenderedProductContent>
    </RenderedProduct>
  )
}

export default CartProduct;