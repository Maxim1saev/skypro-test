//  Отделяет тысячную часть числа если она имеется
export const numberWithSpace = (num: number) => {
  if (num < 1000) return num;

  return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ' ');
};
