import { useEffect, useRef } from 'react';
import { ForceGraph3D } from 'react-force-graph';
import { connect } from 'react-redux';
import { generateElementData } from '../../helpers';

const SingleAtomRender = ({width, height, elementsInChart}: any) => {
  const fgRef: React.MutableRefObject<any> = useRef();

  useEffect(() => {
    !!elementsInChart.length && fgRef?.current.d3Force('link').distance((link: any) => {
      return link.target.type === 'electron' ? link.electronInShell * 88 : 4;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = !!elementsInChart.length && elementsInChart.reduce((ini: { nodes: any; links: any; }, el: any) => {
    const {nodes, links} = generateElementData(el);
    
    return {
      ...ini,
      nodes: [...ini.nodes, ...nodes],
      links: [...ini.links, ...links],
    }

  }, { nodes: [], links: [] });

  console.log(data);
  

return <>
    {!!elementsInChart.length && <ForceGraph3D
      ref={fgRef}
      width={width}
      height={height}
      backgroundColor={'#7E7E7E'} nodeLabel="type" nodeAutoColorBy="type"
      graphData={data}
      showNavInfo={true}
      nodeVal={16}
      nodeResolution={32}
      nodeOpacity={1}
      linkVisibility={false}
      cooldownTicks={40}
      onEngineStop={() => (fgRef as any)?.current?.zoomToFit(400)}
      enableNavigationControls
      forceEngine={'d3'}
    />}
  </>
};

function mapStateToProps(state: any) {
  return {
    width: state.panelSizes.E.width,
    height: state.panelSizes.E.height ,
    elementsInChart: [...state.compiledMolecule.elementsInChart]
  };
};

export default connect(mapStateToProps, {})(SingleAtomRender);
