import { useEffect, useRef } from 'react';
import { ForceGraph3D } from 'react-force-graph';
import { connect } from 'react-redux';

const SingleAtomRender = ({width, height, data}: any) => {
  const fgRef: React.MutableRefObject<any> = useRef();

  useEffect(() => {
    fgRef?.current.d3Force('link').distance((link: any) => {
      return link.target.type === 'electron' ? link.electronInShell * 88 : 11;
    });
  }, []);

return <>
    <ForceGraph3D
      ref={fgRef}
      width={width}
      height={height}
      backgroundColor={'#7E7E7E'} nodeLabel="type" nodeAutoColorBy="type"
      graphData={{ ...data }}
      showNavInfo={true}
      nodeVal={16}
      nodeResolution={16}
      nodeOpacity={1}
      linkVisibility={false}
      cooldownTicks={40}
      // onEngineStop={() => (fgRef as any)?.current?.zoomToFit(400)}
      enableNavigationControls
      forceEngine={'d3'}
    />
  </>
};

function mapStateToProps(state: any) {
  return {
    width: state.panelSizes.E.width,
    height: state.panelSizes.E.height ,
    data: {...state.compiledMolecule.data}
  };
};

export default connect(mapStateToProps, {})(SingleAtomRender);
