import React from 'react';
import { connect } from 'react-redux';
import ChemicalElement  from './ChemicalElement';
import { filterElements } from '../../redux_store/actions';
import { ChemSearchInputContainer, FilteredChemicalElementBox, ChemElementCollection } from '../../view';
import { ReduxStoreType } from '../../redux_store/reducers';

function SmallChemForm({ table: { filteredElements }, filterElements, panelSizes }: any) {
  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    e.stopPropagation();
    const { target: { value } } = e;
    filterElements(value);
  };

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
      return (<FilteredChemicalElementBox key={`placeholder-${idx}`} D={panelSizes.D} />);
    })),
    <FilteredChemicalElementBox key={`placeholder-last-and-control`} D={panelSizes.D}>
      {/* <p>CONTROL</p> */}
    </FilteredChemicalElementBox>
  ];

  const atomSearchBlock = <>
  {chemicalElementSearch}
  <ChemElementCollection>
    {boxElements}
    {placeholders}
  </ChemElementCollection>
</>

  return atomSearchBlock;
}

function mapStateToProps(state: ReduxStoreType) {
  return {
    table: { ...state.table },
    panelSizes: { ...state.panelSizes }
  };
};

export default connect( mapStateToProps, { filterElements } )(SmallChemForm);