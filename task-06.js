const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const even = numbers.filter(x => x % 2 === 0);

const doubled = even.map(x => x * 2);
console.log(doubled);
const reversed = doubled.reverse();

console.log(reversed);