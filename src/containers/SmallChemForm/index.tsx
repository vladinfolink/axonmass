import React from 'react';
import { connect } from 'react-redux';
import styled, { ThemedStyledProps } from 'styled-components';

import ChemicalElement  from './ChemicalElement';

import { filterElements } from '../../redux_store/actions';

type FilteredChemicalElementBoxPropsType = ThemedStyledProps<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
  D: { width: number, height: number }
}, any>;

const calculateHeight = (percent: number, total: number) => `${percent / 100 * total}px`;
const calculateWidth = (percent: number, total: number) => `${percent / 100 * total}px`;

const CommonFlexStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const ChemSearchInputContainer = styled.div`
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

const ChemElementCollection = styled(CommonFlexStyle)``;

const FilteredChemicalElementBox = styled.div`
  flex-basis: 20%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: ${(props: FilteredChemicalElementBoxPropsType) => calculateHeight(60, props.D.height)};
  justify-content: space-evenly;
  background-color: #1C1C1E;
  border: 1px dotted #585858;
`;

function SmallChemForm({
  table: { filteredElements },
  filterElements,
  panelSizes
}: any) {
  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    e.stopPropagation();
    const { target: { value } } = e;
    filterElements(value);
  }

  const chemicalElementSearch = <ChemSearchInputContainer
    D={panelSizes.D}
  >
    <input type="text" placeholder="SEARCH.." onChange={(e) => onInputChange(e)}></input>
  </ChemSearchInputContainer>;

  const boxElements = [...filteredElements.slice(0, 4)].map((filteredElement: any, idx) => {
    const chemicalElementProps = { filteredElement };
    return (
      <FilteredChemicalElementBox
        key={`filtered-chem-el-${idx}`}
        D={panelSizes.D}
      >
        <ChemicalElement {...chemicalElementProps} key={filteredElement.name} />
      </FilteredChemicalElementBox>
    );
  });

  const placeholders = [
    ...(new Array(
      4 - boxElements.length
    ).fill(null).map((placeholder, idx) => {
      return (<FilteredChemicalElementBox
        key={`placeholder-${idx}`}
        D={panelSizes.D}
      />);
    })),
    <FilteredChemicalElementBox
      key={`placeholder-last-and-control`}
      D={panelSizes.D}
    >
      {/* <p>CONTROL</p> */}
    </FilteredChemicalElementBox>
  ];

  return (
    <>
      {chemicalElementSearch}
      <ChemElementCollection>
        {boxElements}
        {placeholders}
      </ChemElementCollection>
    </>
  )
}

function mapStateToProps(state: any) {
  return {
    table: { ...state.table },
    panelSizes: { ...state.panelSizes }
  };
};

const mapDispatchToProps = {
  filterElements
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SmallChemForm);