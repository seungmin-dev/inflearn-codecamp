export const getDate = (date: string): string => {
  const _date = new Date(date);
  const yyyy = _date.getFullYear();
  const mm = _date.getMonth() + 1;
  const dd = _date.getDate();
  return `${yyyy}-${mm}-${dd}`;
};
export const replaceNumberComma = (number): string => {
  return number?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};
