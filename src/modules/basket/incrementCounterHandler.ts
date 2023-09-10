import { ProductsBasket } from '../types';
import { incrementCounter } from '../utils/incrementCounter';
import { updateBasket } from '../utils/updateBasket';
import { renderSumOfProducts } from './renderSumOfProducts';

// Увеличивает колличество определенного товара в корзине
export const incrementCounterHandler = (id: number, list: ProductsBasket[]) => {
  const countValue = incrementCounter(list, id);

  const counterValue = document.getElementById(`counter-value${id}`);

  counterValue.innerHTML = String(countValue);

  updateBasket(list);

  renderSumOfProducts();
};
