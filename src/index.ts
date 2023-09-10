import '@babel/polyfill';
import './index.html';
import './style/index.scss';

import { PRODUCTS } from './modules/data';
import { sortList } from './modules/catalog/sortList';

const selectSorter = document.getElementById(
  'selectSorter'
) as HTMLSelectElement;

sortList(PRODUCTS);

selectSorter.addEventListener('change', () => {
  sortList(PRODUCTS);
});
