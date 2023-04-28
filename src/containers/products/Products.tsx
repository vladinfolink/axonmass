import { connect, useSelector } from 'react-redux'
import { IProductInterface, IProductProps } from '../../types'
import Product from './Product';
import { transferProductToCart } from '../../redux_store/actions/products';
import { RenderedProducts } from '../../view';

const Products = ({ transferProductToCart }: IProductProps) => {
  const products = useSelector((state: any) => state.products);

  const productsToRender = products.length ? [...products].map((product: IProductInterface, idx: number) => (<Product key={product.id} product={product} width={0} transferProductToCart={transferProductToCart} />)) : 'loading..';

  const render = <RenderedProducts>
    {productsToRender}
  </RenderedProducts>

  return render;
}



export default connect(null, {transferProductToCart})(Products)

