/**
 * Creates an array of shuffled values, using a version of the
 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
 * @param arr The array to shuffle
 */
export default function shuffle<T>(arr: readonly T[]): T[] {
  const length = arr.length;
  const result = [...arr];

  for (let i = 0; i <= length - 2; i++) {
    const rand = i + Math.floor(Math.random() * (length - i));
    const tmp = result[rand];
    result[rand] = result[i];
    result[i] = tmp;
  }

  return result;
}
