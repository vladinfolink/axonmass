import { connect } from 'react-redux';
import styled from 'styled-components';
import { IAtomNameInterface } from '../../types';
import SingleAtomRender from './SingleAtomRender';

const AtomName = styled.p`
  font-size: ${(props: IAtomNameInterface) => props.atomNameStyle['font-size']};
  text-align: ${(props: IAtomNameInterface) => props.atomNameStyle['text-align']};
  width: ${(props: IAtomNameInterface) => props.atomNameStyle.width};
  border: ${(props: IAtomNameInterface) => props.atomNameStyle.border};
`;

function ChemicalElement({ filteredElement, width }: any) {
  const fontSize = `calc(${width / 65}px)`;
  const style = {
    'font-size': fontSize, 'text-align': 'center', width: `${width / 5.4}px`, border: '1px solid white'
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
