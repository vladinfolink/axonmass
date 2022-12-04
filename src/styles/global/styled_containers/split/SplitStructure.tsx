import React , {useEffect} from 'react';
import { Allotment,  setSashSize  } from "allotment";

import "allotment/dist/style.css";
import './split_structure.css'

type Props = {}

// eslint-disable-next-line no-empty-pattern
export function SplitStructure({ }: Props) {

  useEffect(() => {
    setSashSize(200)
  }, []);


  return (
    <>
        <Allotment minSize={100}>
          <Allotment.Pane minSize={400} maxSize={1000}>
            <Allotment vertical>
              <Allotment.Pane minSize={100}>
                <div />
              </Allotment.Pane>
              <Allotment.Pane snap>
                <div />
              </Allotment.Pane>
              <Allotment.Pane snap>
                <div />
              </Allotment.Pane>
            </Allotment>
          </Allotment.Pane>
          <Allotment.Pane minSize={400}>
            <div />
          </Allotment.Pane>
          <Allotment.Pane minSize={400} maxSize={1000}>
            <Allotment vertical>
              <Allotment.Pane minSize={100}>
                <div />
              </Allotment.Pane>
              <Allotment.Pane snap>
                <div />
              </Allotment.Pane>
              <Allotment.Pane snap>
                <div />
              </Allotment.Pane>
            </Allotment>
          </Allotment.Pane>
        </Allotment>
    </>
  )
}