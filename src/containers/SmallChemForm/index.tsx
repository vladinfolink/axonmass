import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import { connect } from 'react-redux';
import styled, { ThemedStyledProps } from 'styled-components';

import { ChemicalElement } from './ChemicalElement';

import { filterElements } from '../../redux_store/actions';

const CommonFlexStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #5A5A5A;
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

const ChemElementCollection = styled(CommonFlexStyle)``;

type FilteredChemicalElementBoxPropsType = ThemedStyledProps<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
  height: number;
}, any>

const FilteredChemicalElementBox: any = styled.div.attrs(
  (props: FilteredChemicalElementBoxPropsType) => ({
    height: `${props.height}px`
  }))`
  flex-basis: 19.6%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: ${(props: FilteredChemicalElementBoxPropsType) => props.height}px;
  justify-content: center;
  background-color: #636363;
  border-radius: 6px;
  border: 1px dashed #5A5A5A;
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

  const chemicalElementSearch = <ChemSearchInputContainer>
    <input type="text" placeholder="SEARCH.." onChange={(e) => onInputChange(e)}></input>
  </ChemSearchInputContainer>;

  const boxElements = [...filteredElements.slice(0, 4)].map((filteredElement: any, idx) => {
    const chemicalElementProps = { filteredElement };
    return (
      <FilteredChemicalElementBox
        key={`filtered-chem-el-${idx}`}
        height={panelSizes.D.height}
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
        height={panelSizes.D.height}
      />);
    })),
    <FilteredChemicalElementBox
      key={`placeholder-last-and-control`}
      height={panelSizes.D.height}
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