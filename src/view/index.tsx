import styled from "styled-components";
import { RenderedProductProps } from "../types";

export const RenderedProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -0.5rem;
  padding: 1rem;
  margin: 1rem;
`;

export const RenderedProduct = styled.div<RenderedProductProps>`
  flex-basis: calc(33.333% - 1rem);
  margin: 0.5rem;
  height: 405px;

  position: relative;

  border: 1px solid;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;

  overflow: auto;
  word-wrap: break-word;
  white-space: pre-wrap;
  text-overflow: ellipsis;
  
  ${props => {
    if (props.width > 1000) {
      return 'flex-basis: calc(25% - 1rem);';
    } else if (props.width > 800) {
      return 'flex-basis: calc(33.33% - 1rem);';
    } else if (props.width > 480) {
      return 'flex-basis: calc(50% - 1rem);';
    } else {
      return 'flex-basis: calc(100% - 1rem);';
    }
  }}

  &::-webkit-scrollbar {
    width: 6px; 
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 10px; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888; 
    border-radius: 10px;appearance
    background-clip: content-box;box of the thumb
    border: 1px solid transparent; 
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555; 
  }
`;

export const RenderedProductContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

export const ProductImageContainer = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  padding: 0.5rem;
`;

export const ProductName = styled.div`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const ProductPrice = styled.div`
  font-size: 1.2rem;
`;

export const AddToCartIcon = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2196f3;
  color: white;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;

  &:hover {
    background-color: #1e88e5;
  }
`;

export const CartRenderedProduct = styled.div<RenderedProductProps>`
  flex-basis: calc(33.333% - 1rem);
  margin: 0.5rem;
  height: 405px;

  position: relative;

  border: 1px solid;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;

  overflow: auto;
  word-wrap: break-word;
  white-space: pre-wrap;
  text-overflow: ellipsis;
  
  ${props => {
    if (props.width > 1000) {
      return 'flex-basis: calc(25% - 1rem);';
    } else if (props.width > 800) {
      return 'flex-basis: calc(33.33% - 1rem);';
    } else if (props.width > 480) {
      return 'flex-basis: calc(50% - 1rem);';
    } else {
      return 'flex-basis: calc(100% - 1rem);';
    }
  }}

  &::-webkit-scrollbar {
    width: 6px; 
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 10px; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888; 
    border-radius: 10px;appearance
    background-clip: content-box;box of the thumb
    border: 1px solid transparent; 
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555; 
  }
`;

export const CartRenderedProductContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  position: relative;
`;

export const CartProductImageContainer = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
`;

export const CartProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const CartProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  padding: 0.5rem;
`;

export const CartProductName = styled.div`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const CartProductPrice = styled.div`
  font-size: 1.2rem;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
  color: #555;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;

  &:hover {
    background-color: #e0e0e0;
    color: #333;
`; 

export const SorterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const SortOption = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
`;

export const StyledLabel = styled.label`
  margin-right: 8px;
`;

export const StyledSelect = styled.select`
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  background-color: #fff;
  appearance: none;
`;

export type sortOrderCategories = 'price' | 'alphabetically' | 'category';