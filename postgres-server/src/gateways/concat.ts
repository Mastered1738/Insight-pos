export function concatenateUsernamesAndNumbers(
  username1: string,
  number1: number,
  username2: string,
  number2: number,
): string {
  const usernames = [username1, username2].sort();
  const numbers = [number1, number2].sort();
  const concatenatedString = usernames.join('') + numbers.join('');
  return concatenatedString;
}
