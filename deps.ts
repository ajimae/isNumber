export function isNumber(number: any): boolean {
  return (!isNaN(number) && typeof number === 'number');
}
