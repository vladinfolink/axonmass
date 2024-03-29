import styled from 'styled-components';
import { calculateHeightAsString } from '../helpers';
import { FilteredChemicalElementBoxPropsType } from '../types';

export const CommonFlexStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ChemSearchInputContainer = styled.div`
  flex-basis: 90%;
  display: flex;
  height: ${(props: FilteredChemicalElementBoxPropsType) => calculateHeightAsString(14, props.D.height)};

  input {
    font-size: 22px;
    flex-basis: 100%;
    text-align: center;
    background-color: #3D3D3D;
    border: none;
    color: #C1C1C1;

    :focus{
      outline: none;
    }
  }
`;

export const ChemElementCollection = styled(CommonFlexStyle)``;

export const FilteredChemicalElementBox = styled.div`
  flex-basis: 20%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: ${(props: FilteredChemicalElementBoxPropsType) => calculateHeightAsString(100, props.D.height)};
  justify-content: space-evenly;
  background-color: #7E7E7E;
`;