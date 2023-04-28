import { connect } from 'react-redux'
import { IProductInterface, MatchedProductInterface, MatchedProductsInterface } from '../../types'
import CartProduct from './CartProduct';
import styled from 'styled-components';
import { shallowEqual, useSelector } from 'react-redux'
import { transferProductToCart } from '../../redux_store/actions';
import { useEffect } from 'react';

const RenderedProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -0.5rem;
  padding: 1rem;
  margin: 1rem;
`;

const CartProducts = () => {
  const matchedProducts = useSelector((state: any) => state.cart.matchedProducts);
  const products = Object.values(matchedProducts)

  const productsToRender = products.length ? [...products].map((product: any, idx: number) => (<CartProduct key={product.id} product={product} width={0} transferProductToCart={transferProductToCart} />)) : 'Your cart is empty';

  const render = <RenderedProducts>
    {productsToRender}
  </RenderedProducts>

  return render;
}


export default CartProducts;

