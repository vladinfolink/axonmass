import React , {useEffect, useState, useMemo} from 'react';
import { Allotment,  setSashSize  } from "allotment";

import debounce from 'lodash/debounce';

import "allotment/dist/style.css";
import './split_structure.css';

type Props = {
  render: any;
}

// eslint-disable-next-line no-empty-pattern
export function SplitStructure({ render }: Props) {


  const changeHandler = (sizes: number[]) => {
    console.log(sizes);
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 600)
  , []);


  return (
    <>
        <Allotment minSize={100}>
          <Allotment.Pane minSize={400}>
            <Allotment onChange={debouncedChangeHandler} vertical>
              <Allotment.Pane minSize={100}>
                <div />
              </Allotment.Pane>
              <Allotment.Pane minSize={100}>
                <div />
              </Allotment.Pane>
              <Allotment.Pane minSize={100}>
                <div />
              </Allotment.Pane>
            </Allotment>
          </Allotment.Pane>

          <Allotment.Pane minSize={400}>
            <div />
          </Allotment.Pane>
        </Allotment>
    </>
  )
}