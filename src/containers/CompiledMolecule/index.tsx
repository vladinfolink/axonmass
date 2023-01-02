import { ForceGraph3D } from 'react-force-graph';
import { connect } from 'react-redux';

const SingleAtomRender = ({width, height, data}: any) => {

return <>
    <ForceGraph3D
      width={width}
      height={height}
      backgroundColor={'#7E7E7E'} nodeLabel="type" nodeAutoColorBy="type"
      graphData={{ ...data }}
      showNavInfo={false} nodeVal={16} nodeResolution={32} nodeOpacity={1} linkVisibility={false} cooldownTicks={40}
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
