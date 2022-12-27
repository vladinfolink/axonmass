import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { ChemicalElement } from './ChemicalElement';

import { filterElements } from '../../redux_store/actions';

const commonFlexStyle = `
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const ChemSearchInputContainer = styled.div`
  flex-basis: 90%;
  display: flex;

  input {
    font-size: 32px;
    flex-basis: 100%;
    text-align: center;
    background-color: #636363;
    border: none;
    border-radius: 6px;
    color: #B4B4B4;

    :focus{
      outline: none;
    }
  }
`;

const ChemElementCollection = styled.div`
  ${commonFlexStyle}
  justify-content: space-around;
  border: 1px solid #5A5A5A;
`;

const FilteredChemicalElementBox = styled.div`
  ${commonFlexStyle}
  justify-content: center;
  height: 31.4vh;
  flex-basis: 19.6%;
  background-color: #636363;
  border-radius: 6px;
  border: 1px dashed #5A5A5A;
`;

function SmallChemForm({ filteredElements, filterElements }: any) {
  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    e.stopPropagation();
    const { target: { value } } = e;
    filterElements(value);
  }

  const chemicalElementSearch = <ChemSearchInputContainer>
    <input type="text" placeholder="SEARCH.." onChange={(e) => onInputChange(e)}></input>
  </ChemSearchInputContainer>;

  const boxElements = [...filteredElements.slice(0, 4)].map((filteredElement: any, idx) => {
    const chemicalElementProps = { filteredElement };
    return (
      <FilteredChemicalElementBox key={`filtered-chem-el-${idx}`}>
        <ChemicalElement {...chemicalElementProps} key={filteredElement.name} />
      </FilteredChemicalElementBox>
    );
  });

  const placeholders = [
    ...(new Array(
      4 - boxElements.length
    ).fill(null).map((placeholder, idx) => {
      return (<FilteredChemicalElementBox key={`placeholder-${idx}`} />);
    })),
    <FilteredChemicalElementBox
      key={`placeholder-last-and-control`}>
      <p>CONTROL</p>
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
  return { ...state.table };
};

const mapDispatchToProps = {
  filterElements
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SmallChemForm);