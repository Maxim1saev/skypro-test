import { ProductsBasket } from '../types';

export const incrementCounter = (
  list: ProductsBasket[],
  id: number,
  max: number = 10
) => {
  let newCountValue;

  for (let index = 0; index < list.length; index++) {
    const element = list[index];

    if (element.id === id) {
      if (element?.count === max) {
        newCountValue = element?.count;
      } else {
        newCountValue = element?.count + 1;
      }

      list[index] = { ...element, count: newCountValue };

      break;
    }
  }

  return newCountValue;
};
