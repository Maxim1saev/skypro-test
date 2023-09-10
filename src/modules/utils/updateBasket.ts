import { ProductsBasket } from '../types';

export const updateBasket = (basketList: ProductsBasket[]): void => {
  const sum = basketList.reduce(
    (acc: any, item: any) => acc + item.price * item.count,
    0
  );

  const data = JSON.stringify({ basketList, sum });

  localStorage.setItem('basket', data);
};
