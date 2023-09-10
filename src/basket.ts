import '@babel/polyfill';
import './basket.html';
import './style/basket.scss';

import { renderSumOfProducts } from './modules/basket/renderSumOfProducts';
import { removeAllProducts } from './modules/basket/removeAllProducts';
import { renderBasketList } from './modules/basket/renderBasketList';

const basketRemoveAllElem: HTMLElement =
  document.getElementById('basketRemoveAll');

const formOrderElem = document.getElementById('formOrder') as HTMLFormElement;

basketRemoveAllElem.addEventListener('click', removeAllProducts);

formOrderElem.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(formOrderElem);

  formData.append('userOrder', localStorage.getItem('basket'));

  const response = await fetch('#', {
    method: 'POST',
    body: formData
  });
});

renderSumOfProducts();

renderBasketList();
