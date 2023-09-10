import { ProductsBasket } from '../types';
import { decrementCounter } from '../utils/decrementCounter';
import { updateBasket } from '../utils/updateBasket';
import { renderSumOfProducts } from './renderSumOfProducts';

// Уменьшает колличество определенного товара в корзине
export const decrementCounterHandler = (id: number, list: ProductsBasket[]) => {
  const countValue = decrementCounter(list, id, 1);
  const counterValue = document.getElementById(`counter-value${id}`);

  counterValue.innerHTML = String(countValue);

  updateBasket(list);

  renderSumOfProducts();
};
