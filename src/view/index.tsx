import styled from 'styled-components';
import { calculateHeight } from '../helpers';
import { FilteredChemicalElementBoxPropsType } from '../types';

export const CommonFlexStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ChemSearchInputContainer = styled.div`
  flex-basis: 90%;
  display: flex;
  height: ${(props: FilteredChemicalElementBoxPropsType) => calculateHeight(14, props.D.height)};

  input {
    font-size: 22px;
    flex-basis: 100%;
    text-align: center;
    background-color: #1C1C1E;
    border: none;
    border-radius: 6px;
    color: #B1B0B2;

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
  height: ${(props: FilteredChemicalElementBoxPropsType) => calculateHeight(60, props.D.height)};
  justify-content: space-evenly;
  background-color: #1C1C1E;
  border: 1px dotted #585858;
`;