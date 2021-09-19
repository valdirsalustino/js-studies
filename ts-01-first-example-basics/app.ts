// class User {
//   name: string;
//   private age: number;

//   constructor(name: string, age: number) { 
//     this.name = name;
//     this.age = age;
//   }
// }

class User { 
  constructor(public name: string, private age: number) {}
}

class Admin extends User {
  constructor(name: string, age: number, private permissions: string[]) {
    super(name, age);
  }
}

const user = new User('Valdiola', 34);
console.log(user.name);

const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = <HTMLInputElement>document.getElementById('num2');
const buttonElemement = document.querySelector('button')!;

function add(a: number, b: number) {
  return a + b;
}


type PrintMode = 'console' | 'alert';

function printResult(result: any, printMode: PrintMode): void { 
  if (printMode === 'console'){
    console.log(result);
  } else if (printMode === 'alert') { 
    alert(result);
  }

}

// const result = add(5, 3);
// let isDone = false;

// console.log(result);

// type alias
type CalculationResults = {res: number, print: () => void}[];

const results: CalculationResults = [];

buttonElemement.addEventListener('click', () => {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  const result = add(num1, num2);
  const resultContainer = {
    res: result,
    print() {
      console.log(this.res);
    }
  };
  results.push(resultContainer);
  // printResult(results);
  // results[0].print();
  printResult(result, 'console');
  printResult(result, 'alert');
});


// Generic type example:

function logAndEcho<T>(val: T) {
  console.log(val);
  return val;
}

logAndEcho<string>('Hi there!').split(' ');