import webpack from 'webpack';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface ProductsBasket extends Product {
  count?: number;
}

export type СreateProductsList = (
  list: ProductsBasket[],
  parentNode: HTMLElement
) => void;

export type SortType = 'firstCheaper' | 'firstExpensive';

export interface Basket {
  basketList: ProductsBasket[];
  sum: number;
}

export interface BuildEnv {
  mode: webpack.Configuration['mode'];
}
