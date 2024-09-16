export {};

const repeatString = (str: string, count: number): string => {
  let result = "";

  for (let i = 1; i <= count; i++) {
    result = result + str;
  }

  return result;
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
