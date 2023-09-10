import { SortType } from '../types';

// Получает значение селекта сортировки
export const getSortingType = () => {
  const selectSorter = document.getElementById(
    'selectSorter'
  ) as HTMLSelectElement;

  const sortingType = selectSorter.options[selectSorter.selectedIndex]
    .value as SortType;

  return sortingType;
};
