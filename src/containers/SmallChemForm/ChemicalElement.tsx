import React from 'react';
import styled from 'styled-components';
import { SingleAtomRender } from './SingleAtomRender';

export const StyledMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-basis: 49%;
  height: 96vh;

  border-radius: 1%;

  :nth-child(1) {
    background-color: #5A5A5A;
  }

  :nth-child(2) {
    background-color: #5A5A5A;
  }
`;

export function ChemicalElement(props: any) {
  const { filteredElement } = props;
  return (
    <>
      <p>{filteredElement.name.toUpperCase()}</p>
      <SingleAtomRender filteredElement={filteredElement} />
    </>
  )
}
