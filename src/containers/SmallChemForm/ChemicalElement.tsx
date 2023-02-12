
import { connect } from 'react-redux';
import styled from 'styled-components';
import { transferCompiledMolecule } from '../../redux_store/actions';
import { IAtomNameInterface } from '../../types';
import SingleAtomRender from './SingleAtomRender';
import SingleTableAtomRender from './SingleTableAtomRender';

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

function ChemicalElement({ filteredElement, width, transferCompiledMolecule }: any) {
  const fontSize = `calc(${width / 65}px)`;
  const style = {
    'font-size': fontSize, width: `${width / 5.4}px`,
  };

  const atomRender = <>
    <AtomName
      atomNameStyle={{ ...style }}
      onClick={() => transferCompiledMolecule(filteredElement)}
    >
      render control icons
    </AtomName>
    {/* <SingleAtomRender
      filteredElement={{...filteredElement}}
    /> */}
    <SingleTableAtomRender filteredElement={{...filteredElement}} />
  </>;

  return atomRender;
}

function mapStateToProps(state: any) {
  return {
    width: state.panelSizes.D.width
  };
};

export default connect(mapStateToProps, { transferCompiledMolecule })(ChemicalElement);
