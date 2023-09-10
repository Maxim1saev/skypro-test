import { Basket } from '../types';
import { updateBasket } from '../utils/updateBasket';
import { hiddenHeadAndActions } from './hiddenHeadAndActions';
import { renderSumOfProducts } from './renderSumOfProducts';

// Удаляет конкретный продукт из корзины
export const removeProduct = (id: number, productNode: HTMLElement) => {
  const { basketList }: Basket =
    JSON.parse(localStorage.getItem('basket')) || {};

  console.log(basketList);

  const newBasketList = basketList.filter((item) => item.id !== id);

  updateBasket(newBasketList);

  productNode.remove();

  renderSumOfProducts();
  hiddenHeadAndActions();
};
