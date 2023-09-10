import { ProductsBasket } from '../types';

export const decrementCounter = (
  list: ProductsBasket[],
  id: number,
  min: number = 0
) => {
  let newCountValue;

  for (let index = 0; index < list.length; index++) {
    const element = list[index];

    if (element.id === id) {
      if (element?.count > min) {
        newCountValue = element?.count - 1;
      } else {
        newCountValue = element?.count;
      }

      list[index] = {
        ...element,
        count: newCountValue
      };

      break;
    }
  }

  return newCountValue;
};
