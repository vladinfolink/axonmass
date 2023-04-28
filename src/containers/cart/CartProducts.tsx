import CartProduct from './CartProduct';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { calculateCost } from '../../helpers';
import { RenderedProducts } from '../../view';

const CartProducts = () => {
  const matchedProducts = useSelector((state: any) => state.cart.matchedProducts);
  const products = Object.values(matchedProducts)

  const productsToRender = products.length ? [...products].map((product: any, idx: number) => (<CartProduct key={product.id} product={product} width={0} />)) : 'Your cart is empty';

  const dispatch = useDispatch();

  const render = <RenderedProducts>
    {productsToRender}
  </RenderedProducts>
  const { items, couponCode } = useSelector((state: any) => state.cart);

  useEffect(() => {
    console.log({ couponCode });

    (async () => {
      const res = await calculateCost({ items, couponCode });//TODO
      dispatch({type: 'POPULATE_COSTS', payload: res.data});
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, couponCode])

  return render;
}


export default CartProducts;

