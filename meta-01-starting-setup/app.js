// Library land;
const uid = Symbol('uid');
console.log(uid);

const user = {
	// uid: 'p1',
	[uid]: 'p1',
	name: 'Valdir',
	age: 34,
	[Symbol.toStringTag]: 'User'
};


// User land => using the library;
user.uid = 'p2';
console.log(user); // this should not be possible;

// return false
console.log(Symbol('uid') === Symbol('uid'));

console.log(user.toString());

// about generators: 

const company = {
  currEmployee: 0,
  employees: ["Valdir", "Bulmer", "Valmir"],
  // next() {
  //   if (this.currEmployee >= this.employees.length) {
  //     return { value: this.currEmployee, done: true };
  //   }
  //   const returnValue = { value: this.employees[this.currEmployee], done: false };
  //   this.currEmployee++;
  //   return returnValue;
	// },
	[Symbol.iterator]: function* employeeGenerator() {
		// let employee = company.next();

	  // while (!employee.done) {
	  // 	yield employee.value;
	  // 	employee = company.next();
		// }
		let currentEmployee = 0;
		while (currentEmployee < this.employees.length){
			yield this.employees[currentEmployee];
			currentEmployee++;
		}

	}
};

// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());

// let employee = company.next();

// while (!employee.done) {
// 	console.log(employee.value);
// 	employee = company.next();
// };


// const it = company.getEmployee();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

for (const employee of company){
	console.log(employee);
}


// -- 

const course = {
	title: 'JavaScript the complete Guide.'
};


Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  },
});

// console.log(course.toString());

// -- About Proxy

const courseHandler = {
  get(obj, propertyName) { // The get trap!
		console.log(propertyName);
		if (propertyName === 'length') {
			return 0;
		}
		return obj[propertyName] || 'NOT FOUND!';
	},
	set(obj, propertyName, newValue) {
		console.log('Sending data...'); 	
		// example to block access to property
		if (propertyName === 'price') {
			return;
		}
		obj[propertyName] = newValue;
	}
};

const pCourse = new Proxy(course, courseHandler);
pCourse.price = 99;
console.log(pCourse.title, pCourse.length, pCourse.price);

