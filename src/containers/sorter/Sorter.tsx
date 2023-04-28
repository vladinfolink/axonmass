import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sortProducts } from '../../redux_store/actions/products';
import { SorterContainer, SortOption, sortOrderCategories, StyledLabel, StyledSelect } from '../../view';

type SorterProps = {
  width?: number,
  categories?: string[],
  sortProducts?: (sortBy: string) => (dispatch: any, getState: any) => Promise<void>
}

function Sorter({ width, categories, sortProducts }: SorterProps) {
  const [sortOrder, setSortOrder] = useState<sortOrderCategories>('price');

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSortOrder = event.target.value as sortOrderCategories;

    ['price', 'alphabetically'].includes(selectedSortOrder) && sortProducts && sortProducts(selectedSortOrder);

    setSortOrder(() => selectedSortOrder);
  };

  const categoryChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    sortProducts && sortProducts(event.target.value)
  };

  const render = <SorterContainer>
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

  return render;
}

function mapStateToProps(state: any): any {
  return {
    width: state.panelSizes.C.width,
    categories: state.categories
  }
};

export default connect(mapStateToProps, { sortProducts })(Sorter);