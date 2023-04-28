import CartProduct from './CartProduct';
import styled from 'styled-components';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import { calculateCost } from '../../helpers';

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

  const productsToRender = products.length ? [...products].map((product: any, idx: number) => (<CartProduct key={product.id} product={product} width={0} />)) : 'Your cart is empty';

  const render = <RenderedProducts>
    {productsToRender}
  </RenderedProducts>
  const { items, couponCode } = useSelector((state: any) => state.cart);

  useEffect(() => {
    (async () => {
      const totalCost = await calculateCost({ items, couponCode });
      console.log({ totalCost });

    })();
  }, [items, couponCode])

  return render;
}


export default CartProducts;

