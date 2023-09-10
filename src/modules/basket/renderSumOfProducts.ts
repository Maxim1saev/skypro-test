import { ProductsBasket } from '../types';
import { numberWithSpace } from '../utils/numberWithSpace';

// Получает значение селекта сортировки

export const renderSumOfProducts = () => {
  const basketSumValueElem: HTMLElement =
    document.querySelector('#basketSumValue');

  const data: Basket = JSON.parse(localStorage.getItem('basket')) || {};

  basketSumValueElem.innerHTML = numberWithSpace(data.sum || 0) + ' руб.';
};

interface Basket {
  basketList: ProductsBasket[];
  sum: number;
}
