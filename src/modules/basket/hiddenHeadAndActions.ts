import { Basket } from '../types';

// Скрывает шапку списка, нижние кнопки и выставляет плейсхолдер
export const hiddenHeadAndActions = () => {
  const { basketList }: Basket =
    JSON.parse(localStorage.getItem('basket')) || {};

  const basketHeadElem: HTMLElement = document.getElementById('basketHead');

  const basketActionsElem: HTMLElement =
    document.getElementById('basketActions');

  const basketPlaceholderElem: HTMLElement =
    document.getElementById('basketPlaceholder');

  const isBasket = basketList?.length;

  if (isBasket) {
    basketActionsElem.style.display = 'flex';
    basketHeadElem.style.display = 'flex';
  } else {
    basketActionsElem.style.display = 'none';
    basketHeadElem.style.display = 'none';
  }

  if (isBasket) {
    basketPlaceholderElem.style.display = 'none';
  } else {
    basketPlaceholderElem.style.display = 'block';
  }
};
