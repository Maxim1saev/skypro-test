import { Basket, ProductsBasket } from '../types';
import { numberWithSpace } from '../utils/numberWithSpace';
import { removeProduct } from './removeProduct';
import { decrementCounterHandler } from './decrementCounterHandler';
import { hiddenHeadAndActions } from './hiddenHeadAndActions';
import { arrowIcon } from '../../img';
import { incrementCounterHandler } from './incrementCounterHandler';

const basketListElem = document.getElementById(
  'basketList'
) as HTMLUListElement;

const { basketList }: Basket = JSON.parse(localStorage.getItem('basket')) || {};

export const renderBasketList = () => {
  hiddenHeadAndActions();

  basketList?.forEach(({ description, name, price, image, id, count }) => {
    const basketListItem = document.createElement('li');

    basketListItem.className = 'basket-item';

    basketListItem.innerHTML = `
              <div class="basketList-item-right-column">
                <img
                  class="basketList-item-right-column-image"
                  src="${image}"
                  alt="${name}"
                />
  
                <div class="basketList-item-right-column-info">
                  <span class="basketList-item-right-column-info-name">${name}</span
                  >
                  <span class="basketList-item-right-column-info-description">${description}</span
                  >
  
                  <span class="basketList-item-right-column-info-price">${numberWithSpace(
                    price
                  )} руб.</span
                  >
  
                  <div>
                    <button class="basketList-item-right-column-info-button">
                      Избранные
                    </button>
  
                    <button id="removeProduct${id}" class="basketList-item-right-column-info-button">
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
  
              <div class="basketList-item-counter">
              <span id="counter-value${id}" class="basketList-item-counter-value">
                ${count}
                </span>
  
                <div class="basketList-item-counter-arrows">
                  <img
                    id="incrementCounter${id}"
                    src="${arrowIcon}"
                    alt="стрелка"
                  />
                  
                  <img
                    id="decrementCounter${id}"
                    src="${arrowIcon}"
                    alt="стрелка"
                  />
                </div>
              </div>
      `;

    basketListElem.append(basketListItem);

    const incrementCounterElem = document.getElementById(
      `incrementCounter${id}`
    );

    const decrementCounterElem = document.getElementById(
      `decrementCounter${id}`
    );
    const removeProductElem = document.getElementById(`removeProduct${id}`);

    const basket = JSON.parse(localStorage.getItem('basket')) || [];
    const basketList = basket.basketList;

    incrementCounterElem.addEventListener('click', () =>
      incrementCounterHandler(id, basketList)
    );

    decrementCounterElem.addEventListener('click', () =>
      decrementCounterHandler(id, basketList)
    );

    removeProductElem.addEventListener('click', () => {
      removeProduct(id, basketListItem);
    });
  });
};
