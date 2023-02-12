import { useEffect, useRef } from 'react';

import { connect } from 'react-redux';
import styled from 'styled-components';
import { calculateHeightAsNumber, generateElementData } from '../../helpers';
import { IAtomNameInterface } from '../../types';

const PeriodicElementRender = styled.p`
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

const SingleTableAtomRender = ({
  filteredElement, width
}: any) => {

  const {
    symbol,
    name,
    atomic_mass
  } = filteredElement;

  const fontSize = `calc(${width / 65}px)`;
  const style = {
    'font-size': fontSize, width: `${width / 5.4}px`,
  };

  return <>
  <PeriodicElementRender
      atomNameStyle={{ ...style, 'font-size': `calc(${width / 20}px)`}}
    >
      {symbol.toUpperCase()}
    </PeriodicElementRender>

    <PeriodicElementRender
      atomNameStyle={{ ...style }}
    >
      {name.toUpperCase()}
    </PeriodicElementRender>

    <PeriodicElementRender
      atomNameStyle={{ ...style }}
    >
      {atomic_mass}
    </PeriodicElementRender>
  </>
};

function mapStateToProps(state: any) {
  return {
    width: state.panelSizes.D.width
  };
};

export default connect(mapStateToProps, {})(SingleTableAtomRender);