export {};

function addNumbers(a: number, b: number, c: number): number {
    return a + b + c;
}

const result = addNumbers(1, 3, 4);
const result1 = addNumbers(3, 3, 4);
const result2 = addNumbers(567, 579, 4);

console.log(result); // Expected output: 8
console.log(result1);
console.log(result2);
