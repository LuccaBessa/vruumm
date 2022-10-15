export const formatCurrency = (value: number, currency: string) => {
  return `${currency}${value.toFixed(2).toString().replace('.', ',')}`;
}