import { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { Allotment } from "allotment";
import debounce from 'lodash/debounce';
import "allotment/dist/style.css";
import './split_structure.css';
import { fetchProducts, registerPanelSize } from '../../../../redux_store/actions';

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

  // -----------------
    useEffect(() => {
      fetchProducts();
    }, [])
  //------------------

  return (
    <>
      <Allotment onChange={(sizes) => debouncedChangeHandler_D_E(sizes, 'D_E')}>

        <Allotment onChange={(sizes) => debouncedChangeHandler_X_Y(sizes, 'HEIGHTS')} vertical>
          <Allotment onChange={(sizes) => debouncedChangeHandler_A_B_C(sizes, 'A_B_C')}>

            <Allotment.Pane > {/* A */}A </Allotment.Pane>
            <Allotment.Pane> {/* B */}B </Allotment.Pane>
            <Allotment.Pane> {/* C */}C </Allotment.Pane>

          </Allotment>
          <Allotment> 
            <div>
              asdasdassdassdasd
            </div>
          </Allotment>
        </Allotment>

        <Allotment minSize={400}>
          <Allotment.Pane minSize={400}>
            {'compiled Products'}
            E
          </Allotment.Pane>
        </Allotment>

      </Allotment>
    </>
  )
}

function mapStateToProps(state: any): any {
  return { ...state }
};

const mapDispatchToProps: any = {
  registerPanelSize,
  fetchProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(SplitStructure)