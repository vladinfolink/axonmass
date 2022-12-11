import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { Allotment } from "allotment";
import SmallChemForm from '../../../../containers/SmallChemForm';

import debounce from 'lodash/debounce';

import "allotment/dist/style.css";
import './split_structure.css';

type Props = {
  render: null;
}

// eslint-disable-next-line no-empty-pattern
function SplitStructure({ render }: Props) {
  const changeHandler = (sizes: number[]) => {
    console.log(sizes);
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 600)
    , []);

  return (
    <>
      <Allotment onChange={debouncedChangeHandler}>

        <Allotment vertical>

          <Allotment minSize={100}>

            <Allotment minSize={100}>

              <Allotment.Pane minSize={100}>
              <SmallChemForm />
              </Allotment.Pane>

              <Allotment.Pane minSize={100}>

              </Allotment.Pane>
            </Allotment>

            <Allotment.Pane minSize={100}>

            </Allotment.Pane>
          </Allotment>

          <Allotment.Pane minSize={100}>

          </Allotment.Pane>
        </Allotment>

        <Allotment minSize={400}>
          <Allotment.Pane minSize={100}>

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
  
}


export default connect(mapStateToProps, mapDispatchToProps)(SplitStructure)