import { connect } from 'react-redux';
import styled from 'styled-components';
import { IAtomNameInterface } from '../../types';
import SingleAtomRender from './SingleAtomRender';

const AtomName = styled.p`
  font-size: ${(props: IAtomNameInterface) => props.atomNameStyle['font-size']};
  width: ${(props: IAtomNameInterface) => props.atomNameStyle.width};
  text-align: center;
  border-left: 8px solid #3D3D3D;
  border-right: 8px solid #3D3D3D;
  border-top: 2px solid #3D3D3D;
  border-bottom: 2px solid #3D3D3D;
  color: #000;
  border-color: #3D3D3D;
`;

function ChemicalElement({ filteredElement, width }: any) {
  const fontSize = `calc(${width / 65}px)`;
  const style = {
    'font-size': fontSize, width: `${width / 5.4}px`,
  };
  const atomRender = <>
    <AtomName atomNameStyle={{ ...style }}>
      {filteredElement.name.toUpperCase()}
    </AtomName>
    <SingleAtomRender filteredElement={filteredElement} />
  </>

  return atomRender;
}

function mapStateToProps(state: any) {
  return {
    width: state.panelSizes.D.width
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ChemicalElement);
