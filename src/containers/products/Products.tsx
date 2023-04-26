import { connect } from 'react-redux'
import { IProductInterface } from '../../types'
import Product from './Product';
import styled from 'styled-components';

const RenderedProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -0.5rem;
  padding: 1rem;
  margin: 1rem;
`;

interface IProducts {
  products: IProductInterface[] | null
}

const Products = ({ products }: IProducts) => {

  const productsToRender = products ? [...products].map((product: IProductInterface, idx: number) => (<Product key={product.id} product={product} width={0} />)) : 'loading..';

  const render = <RenderedProducts>
    {productsToRender}
  </RenderedProducts>

  return render;
}

function mapStateToProps(state: any): any {
  return { products: [...state.products] }
};

export default connect(mapStateToProps, {})(Products)

