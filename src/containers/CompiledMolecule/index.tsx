import { connect } from 'react-redux';

const SingleAtomRender = () => {

return <>
    CompiledMolecule
  </>
};

function mapStateToProps(state: any) {
  return {
    panelSizes: { ...state.panelSizes }
  };
};

export default connect(mapStateToProps, {})(SingleAtomRender);
