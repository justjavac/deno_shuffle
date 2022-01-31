import shuffle, { shuffleInPlace } from "./mod.ts";

const arr = Array(10).fill(0).map((_, i) => i);

console.log(`origin array:\t${arr.join(",")}`);
console.log(`shuffle array:\t${shuffle(arr).join(",")}`);
console.log(`shuffle array:\t${shuffle(arr).join(",")}`);
console.log(`shuffle array:\t${shuffle(arr).join(",")}`);
console.log(`shuffle array:\t${shuffle(arr).join(",")}`);

shuffleInPlace(arr);
console.log(`origin array:\t${arr.join(",")}`);
