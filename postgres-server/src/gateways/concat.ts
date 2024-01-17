export function concatenateNumbers(number1: number, number2: number): string {
  const numbers = [number1, number2].sort();
  const concatenatedString = numbers.join('');
  return concatenatedString;
}
