import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { Allotment } from "allotment";
import SmallChemForm from '../../../../containers/SmallChemForm';

import debounce from 'lodash/debounce';

import "allotment/dist/style.css";
import './split_structure.css';
import { registerPanelSize } from '../../../../redux_store/actions';

type Props = {
  registerPanelSize?: any;
}

// eslint-disable-next-line no-empty-pattern
function SplitStructure({ registerPanelSize }: Props) {
  const changeHandler = (sizes: number[], panelId: string) => {
    console.log(sizes, panelId);
    registerPanelSize('E_0', sizes[0]);
    registerPanelSize('E_1', sizes[1]);

  };

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 600)
    , []);

  return (
    <>
      <Allotment onChange={(sizes) => debouncedChangeHandler(sizes, 'E')}>

        <Allotment vertical>

          <Allotment minSize={100}>

            <Allotment minSize={100}>

              <Allotment.Pane minSize={100}>
                {/* A */}A
              </Allotment.Pane>

              <Allotment.Pane minSize={100}>
                {/* B */}B
              </Allotment.Pane>
            </Allotment>

            <Allotment.Pane minSize={100}>
              {/* C */}C
            </Allotment.Pane>
          </Allotment>

          <Allotment.Pane minSize={100}>
            {/* D */}D
            <SmallChemForm />
          </Allotment.Pane>
        </Allotment>

        <Allotment minSize={400}>
          <Allotment.Pane minSize={100}>
            {/* E */}E
          </Allotment.Pane>
        </Allotment>

      </Allotment>
    </>
  )
}

function mapStateToProps(state: any): any {
  return {...state}
};

const mapDispatchToProps: any = {
  registerPanelSize
}

export default connect(mapStateToProps, mapDispatchToProps)(SplitStructure)