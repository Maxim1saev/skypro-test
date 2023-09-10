import { Product } from '../types';

import { renderProductsList } from './renderProductsList';
import { getSortingType } from './getSortingType';

// Сортирует список товаров
export const sortList = (list: Product[]) => {
  const products = document.getElementById('products');

  const sortingType = getSortingType();

  let sortedList: Product[];

  if (sortingType === 'firstCheaper') {
    sortedList = list.sort((a, b) => a.price - b.price);
  }

  if (sortingType === 'firstExpensive') {
    sortedList = list.sort((a, b) => b.price - a.price);
  }

  renderProductsList(sortedList, products);
};
