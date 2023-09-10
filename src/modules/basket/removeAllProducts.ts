import { hiddenHeadAndActions } from './hiddenHeadAndActions';
import { renderSumOfProducts } from './renderSumOfProducts';

// Очищает список товаров
export const removeAllProducts = () => {
  const basketListElem: HTMLElement = document.getElementById('basketList');

  basketListElem.innerHTML = '';

  localStorage.removeItem('basket');

  renderSumOfProducts();

  hiddenHeadAndActions();
};
