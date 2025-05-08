export function clearFormat(value) {
  return parseFloat(
    value.replace(/\s/g, '').replace('R$', '').replace(/\./g, '').replace(',', '.'),
  );
}

export const coinFormat = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
});
