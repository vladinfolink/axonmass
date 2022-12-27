import { connect } from 'react-redux';
import SingleAtomRender from './SingleAtomRender';

function ChemicalElement({filteredElement, panelSizes: { D : {width}}}: any) {
  const fontSize = `calc(${width/65}px)`;
  const style = {
    fontSize,
    width: `${width / 5.4}px`,
    border: '1px solid white',
    'text-align': 'center'
  }
  return (
    <>
      <p style={{ ...style }}>{filteredElement.name.toUpperCase()}</p>
      <SingleAtomRender filteredElement={filteredElement} />
    </>
  )
}

function mapStateToProps(state: any) {
  return {
    panelSizes: { ...state.panelSizes }
  };
};

const mapDispatchToProps = { };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChemicalElement);
