// this is a pure function
function app(num1, num2) {
	return num1 + num2;
}

console.log(app(1, 5));
console.log(app(12, 15));

// this is a inpure function
function addRandom(num1) {
	return num1 + Math.random();
}

console.log(addRandom(8));

let previousResult = 0;

// Not a pure function because change something 
// outside the function. Called side-effect.
function addMoreNumbers(num1, num2){ 
	const sum = num1 + num2;
	previousResult = sum;
	return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ['Sports', 'Cooking'];

// not apure function because change 
// the array. Observe array is point 
// to object in memory therefore 
// is the same array which push
// the value.
function printHobbies(h) {
	h.push('NEW HOBBY');
	console.log(h);
}

printHobbies(hobbies);

// this is the function factory
function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
	}
	return calculateTax;
}

// const vatAmount = calculateTax(100, 0.19);
// const incomeTax = calculateTax(100, 0.25);

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateIncomeAmount(100));

let userName = 'Valdir';

function greetUser() {
	// let name = userName;
	// let name = 'Ana';
	console.log('Hi ' + name)
}

name = 'Valdiola'

userName = 'Valdiola'

greetUser();

// function powerOf(x, n) {
// 	result = 1;
// 	for (let i=0; i<n; i++){
// 		result *= x;
// 	}
// 	return result;
// }

function powerOf(x, n) {
	// if (n === 1) {
	// 	return x;
	// }
	// return x * powerOf(x, n - 1);
	
	return n === 1 ? x : x * powerOf(x, n - 1);
}


console.log(powerOf(2,3));

const myself = {
  name: "Valdir",
  friends: [
    {
      name: "Bulmer",
      friends: [
        {
          name: "Anouk",
          friends: [
            { name: "Fred" },
            { name: "Anna", friends: [{ name: "Marcela" }, { name: "Maria" }] },
          ],
        },
      ],
    },
    {
      name: "Julia",
    },
  ],
};

function getFriendNames(person) {
	const collectedNames = [];

	if (!person.friends) {
		return [];
	}

	for (const friend of person.friends) {
		collectedNames.push(friend.name);
		collectedNames.push(...getFriendNames(friend));
  }

	return collectedNames;
}

console.log(myself);
console.log(getFriendNames(myself));

// tagged templates 
function productDescripton(strings, productName, productPrice) {
	console.log(strings);
	console.log(productName);
	console.log(productPrice);

	let productCategory = 'cheap';

	if (productPrice > 20) {
		productCategory = 'fair';
	}

	return `${strings[0]}${productName}${strings[1]}${productPrice}${strings[2]} (${productCategory})`;
}

const prodName = 'JavaScript course';
const prodPrice = 199.99;

const productOutput = productDescripton`This product (${prodName}) is ${prodPrice}.`;
console.log(productOutput)