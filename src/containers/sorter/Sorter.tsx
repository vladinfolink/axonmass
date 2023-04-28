import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { sortProducts } from '../../redux_store/actions';

const SorterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SortOption = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
`;

const StyledLabel = styled.label`
  margin-right: 8px;
`;

const StyledSelect = styled.select`
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  background-color: #fff;
  appearance: none;
`;

type SorterProps = {
  width?: number,
  categories?: string[],
  sortProducts?: (sortBy: string) => (dispatch: any, getState: any) => Promise<void>
}

function Sorter({ width, categories, sortProducts }: SorterProps) {
  const [sortOrder, setSortOrder] = useState<'price' | 'alphabetically' | 'category'>('price');

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSortOrder = event.target.value as 'price' | 'alphabetically' | 'category';
    
    ['price', 'alphabetically'].includes(selectedSortOrder) && sortProducts && sortProducts(selectedSortOrder);

    setSortOrder(() => selectedSortOrder);
  };

  const categoryChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    sortProducts && sortProducts(event.target.value)
  };

  return (
    <SorterContainer>
      <h3>Sorter</h3>
      <SortOption>
        <StyledLabel htmlFor="sortOrder">Sort by:</StyledLabel>
        <StyledSelect id="sortOrder" value={sortOrder} onChange={handleSortChange}>
          <option value="price">Price</option>
          <option value="alphabetically">Alphabetically</option>
          <option value="category">Category</option>
        </StyledSelect>
      </SortOption>
      {sortOrder === 'category' && (
        <SortOption>
          <StyledLabel htmlFor="category">Choose category:</StyledLabel>
          <StyledSelect defaultValue={"Select a category"} id="category" onChange={categoryChangeHandler}>
            <option disabled>Select a category</option>
            {categories?.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </StyledSelect>
        </SortOption>
      )}
    </SorterContainer>
  );
}

function mapStateToProps(state: any): any {
  return {
    width: state.panelSizes.C.width,
    categories: state.categories
  }
};

export default connect(mapStateToProps, { sortProducts })(Sorter);