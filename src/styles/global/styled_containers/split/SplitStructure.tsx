import { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { Allotment } from "allotment";
import debounce from 'lodash/debounce';
import "allotment/dist/style.css";
import './split_structure.css';
import Products from '../../../../containers/products/Products';
import Sorter from '../../../../containers/sorter/Sorter';
import CartProducts from '../../../../containers/cart/CartProducts';
import styled from 'styled-components';
import { registerPanelSize } from '../../../../redux_store/actions/panels';
import { fetchProducts } from '../../../../redux_store/actions/products';
import PromoCodes from '../../../../containers/PromoCodes/PromoCodes';

const OverFlow = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

type SplitStructureProps = { registerPanelSize?: any; fetchProducts?: any}

function SplitStructure({ registerPanelSize, fetchProducts }: SplitStructureProps) {
  const changeHandler = (sizes: number[], panelId: string) => {
    const panels: {
      [key: string]: any;
    } = {
      'A_B_C': () => {
        registerPanelSize('A', sizes[0]);
        registerPanelSize('B', sizes[1]);
        registerPanelSize('C', sizes[2]);
      },
      'D_E': () => {
        registerPanelSize('D', sizes[0]);
        registerPanelSize('E', sizes[1]);
      },
      'HEIGHTS': () => {
        registerPanelSize('HEIGHTS_A_B_C', sizes[0]);
        registerPanelSize('HEIGHT_D', sizes[1]);
        registerPanelSize('HEIGHT_E', sizes[0] + sizes[1]);
      }
    };
    panels[panelId]();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedChangeHandler_A_B_C = useMemo(() => debounce(changeHandler, 600), []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedChangeHandler_D_E = useMemo(() => debounce(changeHandler, 600), []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedChangeHandler_X_Y = useMemo(() => debounce(changeHandler, 600), []);

    useEffect(() => {
      fetchProducts();
    }, [fetchProducts]);

    const render = <Allotment onChange={(sizes) => debouncedChangeHandler_D_E(sizes, 'D_E')}>;

    <Allotment onChange={(sizes) => debouncedChangeHandler_X_Y(sizes, 'HEIGHTS')} vertical>
      <Allotment onChange={(sizes) => debouncedChangeHandler_A_B_C(sizes, 'A_B_C')}>

        <Allotment.Pane > {/* A */} </Allotment.Pane>
        <Allotment.Pane> {/* B */}<PromoCodes /> </Allotment.Pane>
        <Allotment.Pane> <Sorter/> </Allotment.Pane>

      </Allotment>
      <Allotment> 
        <OverFlow>
          <CartProducts />
        </OverFlow>
      </Allotment>
    </Allotment>

    <Allotment minSize={400}>
      <Allotment.Pane minSize={400}>
      <OverFlow>
      <Products products={[]} />
      </OverFlow>
      </Allotment.Pane>
    </Allotment>

  </Allotment>

  return  render;
}

export default connect(null, {
  registerPanelSize,
  fetchProducts
})(SplitStructure)