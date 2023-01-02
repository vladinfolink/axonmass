import { ForceGraph3D } from 'react-force-graph';
import { useEffect, useRef } from 'react';

import { connect } from 'react-redux';
import { calculateHeightAsNumber } from '../../helpers';

const SingleAtomRender = ({
  filteredElement, panelSizes
}: any) => {
  const fgRef: React.MutableRefObject<any> = useRef();

  useEffect(() => {
    fgRef?.current.d3Force('link').distance((link: any) => {
      return link.target.type === 'electron' ? link.electronInShell * 88 : 11;
    });
  }, []);

  return <>
    <ForceGraph3D
      ref={fgRef}
      width={panelSizes.D.width / 5.1}
      height={calculateHeightAsNumber(45, panelSizes.D.height)}
      backgroundColor={'#7E7E7E'} nodeLabel="type" nodeAutoColorBy="type"
      graphData={{ ...filteredElement.data }}
      showNavInfo={false} nodeVal={16} nodeResolution={32} nodeOpacity={1} linkVisibility={false} cooldownTicks={40}
      onEngineStop={() => (fgRef as any)?.current?.zoomToFit(400)}
    />
  </>
};

function mapStateToProps(state: any) {
  return {
    panelSizes: { ...state.panelSizes }
  };
};

export default connect(mapStateToProps, {})(SingleAtomRender);
