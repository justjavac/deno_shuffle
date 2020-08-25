import shuffle from "./mod.ts";

const arr = Array(10).fill(0).map((x, i) => i);

console.log(`origin array:\t${arr.join(",")}`);
console.log(`shuffle array:\t${shuffle(arr).join(",")}`);
console.log(`shuffle array:\t${shuffle(arr).join(",")}`);
console.log(`shuffle array:\t${shuffle(arr).join(",")}`);
console.log(`shuffle array:\t${shuffle(arr).join(",")}`);
