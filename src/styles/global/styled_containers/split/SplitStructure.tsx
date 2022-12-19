import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { Allotment } from "allotment";
import SmallChemForm from '../../../../containers/SmallChemForm';
import debounce from 'lodash/debounce';
import "allotment/dist/style.css";
import './split_structure.css';
import { registerPanelSize } from '../../../../redux_store/actions';

type Props = { registerPanelSize?: any; }

function SplitStructure({ registerPanelSize }: Props) {
  const changeHandler = (sizes: number[], panelId: string) => {
    console.log(panelId, sizes);

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
        registerPanelSize('HEIGHT_E', sizes[0] +  sizes[1]);
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

  const A_B_C = 
    <Allotment  onChange={(sizes) => debouncedChangeHandler_A_B_C(sizes, 'A_B_C')}>

      <Allotment.Pane > {/* A */}A </Allotment.Pane>
      <Allotment.Pane> {/* B */}B </Allotment.Pane>
      <Allotment.Pane> {/* C */}C </Allotment.Pane>

    </Allotment>
// -----------------
  const D_group = <Allotment> {/* D */} <SmallChemForm /> </Allotment>

  return (
    <>
      <Allotment onChange={(sizes) => debouncedChangeHandler_D_E(sizes, 'D_E')}>
        
        <Allotment onChange={(sizes) => debouncedChangeHandler_X_Y(sizes, 'HEIGHTS')} vertical>
          {A_B_C}
          {D_group}
        </Allotment>

        <Allotment minSize={400}>
          <Allotment.Pane minSize={400}> {/* E */}E </Allotment.Pane>
        </Allotment>

      </Allotment>
    </>
  )
}

function mapStateToProps(state: any): any {
  return { ...state }
};

const mapDispatchToProps: any = {
  registerPanelSize
}

export default connect(mapStateToProps, mapDispatchToProps)(SplitStructure)