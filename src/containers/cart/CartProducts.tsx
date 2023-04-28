import { connect } from 'react-redux'
import { IProductInterface } from '../../types'
import Product from './CartProduct';
import styled from 'styled-components';
import { transferProductToCart } from '../../redux_store/actions';

const RenderedProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -0.5rem;
  padding: 1rem;
  margin: 1rem;
`;

interface IProducts {
  products: IProductInterface[],
  transferProductToCart: any
}

const CartProducts = ({ products, transferProductToCart }: IProducts) => {

  const productsToRender = products.length ? [...products].map((product: IProductInterface, idx: number) => (<Product key={product.id} product={product} width={0} transferProductToCart={transferProductToCart} />)) : 'loading..';

  const render = <RenderedProducts>
    {productsToRender}
  </RenderedProducts>

  return render;
}

function mapStateToProps(state: any): any {
  return { products: [...state.products] }
};

export default connect(mapStateToProps, {transferProductToCart})(CartProducts)

