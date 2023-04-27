import axios from "axios";
import { IProductInterface } from "../../types";

export const registerPanelSize = (panelId: string, value: number) => async (dispatch: any) => {
  const dimentionScopes: { [key: string]: string } = {
    A: 'REGISTER_PANEL_WIDTH',
    B: 'REGISTER_PANEL_WIDTH',
    C: 'REGISTER_PANEL_WIDTH',
    D: 'REGISTER_PANEL_WIDTH',
    E: 'REGISTER_PANEL_WIDTH',
    HEIGHTS_A_B_C: 'REGISTER_PANEL_HEIGHTS_A_B_C',
    HEIGHT_D: 'REGISTER_PANEL_HEIGHT_D',
    HEIGHT_E: 'REGISTER_PANEL_HEIGHT_E',
  }
  dispatch({ type: dimentionScopes[panelId], panelId, value });
};

async function fetchAllProducts() {
  try {
    // const allProducts: IProductInterface[] = (await axios.get("https://man-shopping-cart-test.azurewebsites.net/api/Products")).data;

    const allProducts: Promise<IProductInterface[]> = new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          [
            {
              "id": 1,
              "name": "USB Cable",
              "imageUrl": "https://images.unsplash.com/photo-1492107376256-4026437926cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
              "supplierId": 1,
              "wholesalePrice": 2,
              "price": 4,
              "categories": [
                "accessory"
              ]
            },
            {
              "id": 2,
              "name": "Laptop",
              "imageUrl": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
              "supplierId": 2,
              "wholesalePrice": 800,
              "price": 1000,
              "categories": [
                "electronic"
              ]
            },
            {
              "id": 3,
              "name": "Monitor",
              "imageUrl": "https://images.unsplash.com/photo-1546538915-a9e2c8d0a0b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
              "supplierId": 1,
              "wholesalePrice": 180,
              "price": 220,
              "categories": [
                "electronic"
              ]
            },
            {
              "id": 4,
              "name": "Headphones",
              "imageUrl": "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
              "supplierId": 1,
              "wholesalePrice": 20,
              "price": 30,
              "categories": [
                "accessory",
                "electronic",
                "audio"
              ]
            }
          ]
        )
      }, 500)
    });

    return allProducts
  } catch (error) {
    console.error('ERROR: ', error);
    return [];
  }
}

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

export const calculateCost = () => (dispatch: any, getState: any) => {
  axios.post('https://man-shopping-cart-test.azurewebsites.net/api/Cart/CalculateCost',

    {
      items: [
        {
          productId: 1,
          unitQuantity: 2
        }
      ],
      couponCode: 'freeShipping!'
    }
  )
}

export const transferProductToCart = (productId: number) => async (dispatch: (arg0: { type: string; payload: number; }) => void) => {
  dispatch({
    type: 'TRANSFER_PRODUCT_TO_CART',
    payload: productId
  });
};

export const removeProductFromCart = (productId: number) => async (dispatch: (arg0: { type: string; payload: string; }) => void) => {

  dispatch({
    type: 'REMOVE_PRODUCT_FROM_CART',
    payload: 'asd'
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
