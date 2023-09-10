import { СreateProductsList } from '../types';

import { addToBasket, addToFavorite } from '../utils/icons';
import { updateBasket } from '../utils/updateBasket';
import { incrementCounter } from '../utils/incrementCounter';
import { numberWithSpace } from '../utils/numberWithSpace';

// Создает список товаров

export const renderProductsList: СreateProductsList = (list, parentNode) => {
  if (parentNode.hasChildNodes()) parentNode.innerHTML = '';

  list.forEach(({ description, name, price, image, id }, index) => {
    const productCard = document.createElement('div');

    productCard.className = 'productCard';

    productCard.innerHTML = `
          <img class="productCard-image" src="${image}" alt="${name}" />
  
          ${addToBasket('productCard-addToFavorites')}

          ${addToFavorite('productCard-addToBasket', `productId-${id}`)}
  
          <span class="productCard-name">${name}</span>
  
          <span class="productCard-description">${description}</span>
          <span class="productCard-price">${numberWithSpace(price)} руб.</span>
    `;

    parentNode.append(productCard);

    const addToCart = document.getElementById(`productId-${id}`);

    addToCart.addEventListener('click', () => {
      const currentData = JSON.parse(localStorage.getItem('basket')) || {};

      const isProductInBasket = (currentData?.basketList || []).some(
        (element: any) => element.id === id
      );

      let basketList = currentData?.basketList || [];

      if (isProductInBasket) {
        incrementCounter(basketList, id);
      } else {
        basketList = [...basketList, { ...list[index], count: 1 }];
      }

      updateBasket(basketList);
    });
  });
};
