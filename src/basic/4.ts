function showMessage(message: string): void {
  console.log(message);
}

showMessage("hello");


function calc(num1: number, num2: number): number {
  return num1 + num2;
}

console.log("calc", calc(2,4));


function customError(): never {
  throw new Error('Error');
}

export { }

