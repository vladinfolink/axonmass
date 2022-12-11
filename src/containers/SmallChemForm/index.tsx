import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { ChemicalElement } from './ChemicalElement';

import { filterElements } from '../../redux_store/actions';

const ChemElementCollection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  border-radius: 6px;
  flex-basis: 98%;
  height: 32vh;
  background-color: #636363;
`;

const ChemElementCollectionBoxPlaceholder = styled.div`
  height: 31.4vh;
  flex-basis: 19.6%;
  background-color: #636363;
  border-radius: 6px;
`;

const ChemElementCollectionBoxControl = styled.div`
  height: 31.4vh;
  flex-basis: 19.6%;
  background-color: #5A5A5A;
  border-radius: 6px;
`;

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
`

function SmallChemForm({ filteredElements, filterElements }: any) {
  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    e.stopPropagation();
    const { target: { value } } = e;
    filterElements(value);
  }

  const chemicalElementSearch = <ChemSearchInputContainer>
    <input type="text" placeholder="SEARCH.." onChange={(e) => onInputChange(e)}></input>
  </ChemSearchInputContainer>

  const boxElements = [...filteredElements.slice(0, 4)].map((filteredElement: any) => {
    const chemicalElementProps = { filteredElement };
    return (
      <ChemicalElement {...chemicalElementProps} key={filteredElement.name} />
    );
  });

  const placeholders = [
    ...(new Array(
      4 - boxElements.length
    ).fill(null).map((placeholder, idx) => {
      return (<ChemElementCollectionBoxPlaceholder key={`placeholder-${idx}`} />);
    })),
    <ChemElementCollectionBoxControl key={`placeholder-last`} >
      <p>CONTROL</p>
    </ChemElementCollectionBoxControl>
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
)(SmallChemForm)