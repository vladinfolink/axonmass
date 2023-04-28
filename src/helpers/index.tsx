import axios from "axios";
import { CartItemInterface, IProductInterface } from "../types";

export async function fetchAllProducts() {
    try {
      const allProducts: IProductInterface[] = (await axios.get("https://man-shopping-cart-test.azurewebsites.net/api/Products")).data; // TODO: axios instance etc

      return [...allProducts];
    } catch (error) {
      throw new Error('failed to fetch')
    }
}

export const calculateCost = async ({items, couponCode}: {
  items: CartItemInterface[],
  couponCode: string
}) =>  {
  try {
    const totalCost = await axios.post('https://man-shopping-cart-test.azurewebsites.net/api/Cart/CalculateCost', { items, couponCode } );

    return {...totalCost};
  } catch (error) {
    console.error(error);
    throw new Error('Failed to calculate cost')
  }
}


  // const allProducts: Promise<IProductInterface[]> = new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(
    //       [
    //         {
    //           "id": 1,
    //           "name": "USB Cable",
    //           "imageUrl": "https://images.unsplash.com/photo-1492107376256-4026437926cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
    //           "supplierId": 1,
    //           "wholesalePrice": 2,
    //           "price": 4,
    //           "categories": [
    //             "accessory"
    //           ]
    //         },
    //         {
    //           "id": 2,
    //           "name": "Laptop",
    //           "imageUrl": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
    //           "supplierId": 2,
    //           "wholesalePrice": 800,
    //           "price": 1000,
    //           "categories": [
    //             "electronic"
    //           ]
    //         },
    //         {
    //           "id": 3,
    //           "name": "Monitor",
    //           "imageUrl": "https://images.unsplash.com/photo-1546538915-a9e2c8d0a0b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
    //           "supplierId": 1,
    //           "wholesalePrice": 180,
    //           "price": 220,
    //           "categories": [
    //             "electronic"
    //           ]
    //         },
    //         {
    //           "id": 4,
    //           "name": "Headphones",
    //           "imageUrl": "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
    //           "supplierId": 1,
    //           "wholesalePrice": 20,
    //           "price": 30,
    //           "categories": [
    //             "accessory",
    //             "electronic",
    //             "audio"
    //           ]
    //         }
    //       ]
    //     )
    //   }, 500)
    // });