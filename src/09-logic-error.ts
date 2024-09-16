export {};

function multiply(a:number, b: number, c:number): number {
  return a * b * c;
}

const result = multiply(1, 3, 4);
const result1 = multiply(15, 3, 4);
console.log(result);
console.log(result1); // Expected output: 12
