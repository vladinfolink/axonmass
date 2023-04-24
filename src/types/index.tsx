
export interface IProductInterface {
  id: number;
  name: string;
  imageUrl: string;
  supplierId: number;
  wholesalePrice: number;
  price: number;
  categories: string[]
}