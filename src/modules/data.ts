import {
  product1,
  product2,
  product3,
  product4,
  product5,
  product6
} from '../img';

import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Кровать TATRAN',
    description:
      'Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.',
    price: 120000,
    image: product1
  },
  {
    id: 2,
    name: 'Кресло VILORA',
    description:
      'Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань. ',
    price: 21000,
    image: product2
  },
  {
    id: 3,
    name: 'Стол MENU',
    description:
      'Европейский дуб - отличается особой прочностью и стабильностью.',
    price: 34000,
    image: product3
  },
  {
    id: 4,
    name: 'Диван ASKESTA',
    description:
      'Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать',
    price: 68000,
    image: product4
  },
  {
    id: 5,
    name: 'Кресло LUNAR',
    description:
      'Прекрасно переносит солнечные лучи, перепады влажности и любые осадки',
    price: 40000,
    image: product5
  },
  {
    id: 6,
    name: 'Шкаф Nastan',
    description:
      'Мебель может быть оснащена разнообразными системами подсветки.',
    price: 80000,
    image: product6
  }
];
