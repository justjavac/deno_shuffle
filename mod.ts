/**
 * Creates an array of shuffled values, using a version of the
 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
 * @param arr The array to shuffle
 */
export default function shuffle<T>(arr: readonly T[]): T[] {
  const result = [...arr];
  shuffleInPlace(result);
  return result;
}

/**
 * Shuffles an array in place using a version of the
 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle). 
 * Use `shuffle` if you do not want to change the original array.
 * @param arr The array to shuffle
 */
export function shuffleInPlace<T>(arr: T[]) {
  const length = arr.length;

  for (let i = 0; i <= length - 2; i++) {
    const rand = i + Math.floor(Math.random() * (length - i));
    const tmp = arr[rand];
    arr[rand] = arr[i];
    arr[i] = tmp;
  }

  return arr;
}
