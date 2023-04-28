import { fetchAllProducts } from "../../helpers";
import { IProductInterface } from "../../types";

export const fetchProducts = () => async (dispatch: any) => {
  let products: IProductInterface[] = await fetchAllProducts();
  const categories = products.reduce((acc: string[], { categories }) => {
    const newCategories = categories.filter(category => !acc.includes(category));
    return [...acc, ...newCategories];
  }, []);

  products = [...products].sort((a: IProductInterface, b: IProductInterface) => a.price - b.price);

  dispatch({ type: 'FETCH_PRODUCTS', payload: [...products] });
  dispatch({ type: 'FETCH_CATEGORIES', payload: [...categories] });
};

export const transferProductToCart = (productId: number) => async (dispatch: (arg0: { type: string; payload: number; productToMatch?: IProductInterface; }) => void) => {
    const productToMatch = (await fetchAllProducts()).find((product) => product.id === productId);

    dispatch({
      type: 'TRANSFER_PRODUCT_TO_CART',
      payload: productId
    });

    dispatch({
      type: 'MATCH_PRODUCT_TO_CART',
      payload: 0,
      productToMatch
    });
};

export const removeProductFromCart = (productId: number) => async (dispatch: (arg0: { type: string; payload: number; }) => void, getState: any) => {

  dispatch({
    type: 'REMOVE_PRODUCT_FROM_CART',
    payload: productId
  });
};

export const sortProducts = (sortBy: string) => async (dispatch: any, getState: any) => {
  let products = await fetchAllProducts();

  const optionScopes: { [key: string]: any } = {
    'price': () => {
      products = [...products];
    },
    'alphabetically': () => {
      products = products.sort((a, b) => a.name.localeCompare(b.name));
    },
    // -------------------------------
    'accessory': () => {
      products = products.filter((product: IProductInterface) => {
        return product.categories.includes(sortBy)
      });
    },
    'electronic': () => {
      products = products.filter((product: IProductInterface) => {
        return product.categories.includes(sortBy)
      });
    },
    'audio': () => {
      products = products.filter((product: IProductInterface) => {
        return product.categories.includes(sortBy)
      });
    },
  }

  optionScopes[sortBy]?.();

  dispatch({ type: 'FETCH_PRODUCTS', payload: [...products] });
};