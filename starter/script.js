'use strict'; /*

/* const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this
  this.calcAge = function () {
    console.log(2024 - this.birthYear);
  };
};

const omar = new Person('omar', 2005);
 */
/* 1. New : new object created {} */
/* 2. function is called, this = {} */
/* 3. {} linked to prototype // omar.__proto__ === Person.prototype */
/* 4. function automatically return {} */

/* console.log(omar instanceof Person);
 */
// Person.prototype.calcAge = function () {
//   console.log(2024 - this.birthYear);
// };
//  */
/* omar.calcAge();
console.log(omar.__proto__);
console.log(omar.__proto__ === Person.prototype);

console.log(Person.prototype);
*/
/* console.log(Person.__proto__.isPrototypeOf(Person));
 */
// prototype  === prototype of linked objects

// const Home = function (place, year) {
//   this.place = place;
//   this.year = year;
// };

// Home.prototype.calcNum = function (a, b) {
//   return a - b;
// };

// const newYear = new Home('Paris', 'whatever');
// console.log(newYear.calcNum(7, 5));

// console.log(newYear.__proto__ === Home.prototype);
// console.log(newYear.__proto__.__proto__);
// console.log(newYear.__proto__.__proto__.__proto__);

// console.dir(Home.prototype.constructor);
// console.log(Home.__proto__.constructor);

/* const arr = [1, 6, 3, 95, 'softy lines', 1, 6, 3, 95, 'softy lines'];
console.log(arr.__proto__);
console.log(Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
 */
/* const h1 = document.querySelector('h1');
console.dir(h1);
console.log(h1.__proto__);
 */
/* console.log([0].__proto__);
 */
/* Coding       Challenge         1  */
/* const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
}; */

/* const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);
 */
/* Classes */

// class expression
// const PersonCl = class {}

// class declaration
// class PersonCl {
//   constructor(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//   }
//   talk() {
//     console.log('Hi there my name is Omar and I hate Khalil Allal');
//   }
//   greet() {
//     console.log(`Hey you, yes you ${this.name}`);
//   }
// }

// const omar = new PersonCl('omar', 2005);
// console.log(omar);
// omar.talk();
// console.log(omar.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey you, yes you ${this.name}`);
// // };
// omar.greet();

// classes are NOT hoisted // you can't use them before they are declared in your code unlike function declarations
// classes are first-class citizens (you can pass them into function or from a function === you can assign them to a variable )
// classes are executed in strict mode

// const account = {
//   name: 'omar',
//   movements: [11, 205, 90, 999, 1],
//   get latest() {
//     // give something as a property but still need to do some calculations before
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// account.latest();
// account.latest = -1;
// console.log(account.movements);

// console.log(account.latest);

/* const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1);
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

account.latest = 80;
console.log(account.movements); */
/* console.log(account.latest); */

// class Person {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   get age() {
//     return 2024 - this.birthYear;
//   }
//   set age(real) {
//     this.birthYear = real;
//   }
//   set fullName(name) {
//     if (name.includes(' ')) return (this._fullName = name);
//     else alert(`${name} is not a full name!`);
//   }

//   // FIX
//   get fullName() {
//     return this._fullName;
//   }
// }
// const omar = new Person('zhioua omar', 2005);
// console.log(omar.fullName);
// omar.fullName = 'zhioua walid';
// console.log(omar.fullName);
// const nabil = new Person('Nabil', 1104);
// console.log(nabil);
/* 
console.log(omar.age);

omar.age = 2000;
console.log(omar.age); */

// const PersonProto = {
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// steven.init('Steven', 2052);
// steven.calcAge();

// const sarah = Object.create(PersonProto);

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(curSpeed) {
//     console.log(curSpeed);
//     this.speed = curSpeed * 1.6;
//   }
//   accelerate() {
//     this.speed = this.speed + 10;
//   }
//   brake() {
//     this.speed = this.speed - 5;
//   }
// }
// const car1 = new Car('bmw', 120);

// console.log(car1.speedUS);
// console.log(car1);

// car1.speedUS = 80;
// console.log(car1);
/* const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(`I am ${2024 - this.birthYear} years old`);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`Hi I'am ${this.firstName}, and I study ${this.course}`);
};

const mike = new Student('Mike', 2005, 'Computer Science');
mike.introduce();
mike.calcAge();
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
 */
/* CODING CHALLENGE 4 */

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(this.speed);
// };
// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.charge -= 1;
//   this.speed += 20;
//   console.log(
//     `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
//   );
// };

// const electricCar = new EV('Tesla', 120, 23);
// console.log(electricCar);

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   get calcAge() {
//     return 2024 - this.birthYear;
//   }
//   set calcAge(real) {
//     this.birthYear = real;
//   }
//   set fullName(name) {
//     if (name.includes(' ')) return (this._fullName = name);
//     else alert(`${name} is not a full name!`);
//   }

//   // FIX
//   get fullName() {
//     return this._fullName;
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(name, birthYear, course) {
//     // This always need to happen first
//     super(name, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`Hi I'am ${this.fullName}, and I study ${this.course}`);
//   }
// }

// const omar = new StudentCl('omar ', 2005, 'Computer Science');
// console.log(omar);
// omar.introduce();
// omar.calcAge;

/* Inheritance between classes : Object.create */

const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.init('Steven', 2001);
